# Betty --- Financial Market Analysis Backend

**Node.js · Express.js · REST APIs · Financial Data · Automated
Testing**

> A modular backend system for financial-market analysis, news
> processing, sentiment analysis, and trading-signal orchestration.

**Repository:** Private

Betty is an actively developed personal project maintained in a private
repository. This technical overview documents its architecture, backend
components, data-processing pipeline, integrations, and engineering
approach.

------------------------------------------------------------------------

## Overview

Betty is a modular backend application built with **Node.js and
Express.js** to support the analysis and orchestration of
financial-market information.

The system integrates external financial-news sources, processes and
filters incoming information, evaluates headline novelty, performs
sentiment analysis through interchangeable adapters, and coordinates the
resulting information through a centralized orchestration layer.

The project was designed around three main engineering goals:

-   **Modularity** --- responsibilities are separated into independent
    services and components.
-   **Testability** --- business logic is structured so individual
    components and complete flows can be tested independently.
-   **Extensibility** --- external providers and analysis components can
    evolve without requiring major changes to the rest of the
    application.

Betty is primarily developed around **FX market analysis**, with EUR/USD
serving as the initial market context.

------------------------------------------------------------------------

# Architecture

Betty follows a layered and service-oriented backend architecture.

``` text
                External Data Sources
                        │
                        ▼
                    Services
                        │
                        ▼
              Processing / Analysis
                        │
                        ▼
                  Orchestrators
                        │
             ┌──────────┴──────────┐
             ▼                     ▼
          Journal               Notifiers
                                  │
                                  ▼
                                Telegram
```

At the HTTP level, responsibilities are separated between:

``` text
HTTP Request
    │
    ▼
   Routes
    │
    ▼
 Controllers
    │
    ▼
  Services
    │
    ▼
Repositories / External Integrations
    │
    ▼
HTTP Response
```

This separation keeps HTTP concerns, business rules, external
integrations, and orchestration logic isolated from one another.

------------------------------------------------------------------------

# Core News Analysis Pipeline

One of Betty's main implemented workflows is the financial-news
processing pipeline.

``` text
NewsAPI
  │
  ▼
NewsService
  │
   ├── Financial-topic filtering
   ├── Noise removal
   ├── FX heuristics
   └── Duplicate filtering
  │
  ▼
NewsNoveltyService
  │
   ├── Normalization
   ├── Tokenization
   ├── Jaccard similarity
   ├── Fuzzy deduplication
   └── Top-K ranking
  │
  ▼
Sentiment Adapter / Aggregator
  │
  ▼
NewsOrchestrationService
  │
   ├──────────────► Journal
  │
   └──────────────► News Digest
                        │
                        ▼
                      Telegram
```

## 1. News ingestion

`NewsService` retrieves financial news from **NewsAPI**.

The service is responsible for preparing raw external information before
it reaches the rest of the analysis pipeline.

Its processing includes:

-   financial-topic filtering
-   removal of irrelevant noise
-   FX-oriented heuristics
-   exact duplicate detection
-   fuzzy duplicate filtering
-   normalization of articles for downstream processing

The service exposes both a complete financial-news workflow and a
lighter normalized-data interface for other modules.

------------------------------------------------------------------------

## 2. Headline novelty filtering

After ingestion, articles are processed by `NewsNoveltyService`.

The goal is to prevent multiple highly similar headlines from dominating
the analysis.

Rather than treating every retrieved article as independent information,
Betty compares normalized headline tokens using **Jaccard similarity**.

Conceptually:

``` text
similarity(A, B) =
intersection(tokensA, tokensB)
──────────────────────────────
   union(tokensA, tokensB)
```

For each candidate headline, Betty can derive a novelty score based on
its maximum similarity with other headlines:

``` text
novelty = 1 - maxSimilarity
```

Higher novelty therefore represents information that is less similar to
the other candidate headlines.

The service supports configurable parameters such as:

-   Top-K result size
-   fuzzy duplicate threshold
-   minimum headline length

This allows the filtering behavior to be modified without changing the
underlying business logic.

------------------------------------------------------------------------

## 3. Sentiment analysis

Selected news items are passed into Betty's sentiment layer.

Instead of tightly coupling the application to one sentiment engine, the
sentiment functionality is structured around **adapters**.

``` text
                    Sentiment Interface
                          │
              ┌───────────┴────────────┐
              ▼                        ▼
        Sentiment Adapter       Alternative Adapter
```

This design allows sentiment implementations to be replaced or extended
while keeping the orchestration layer independent from the underlying
provider or engine.

A legacy Python-based sentiment engine is also supported by the project.

Sentiment results use a normalized structure containing information such
as:

``` json
{
  "title": "Example financial headline",
  "label": "pos | neg | neu",
  "confidence": 0.87
}
```

------------------------------------------------------------------------

# Orchestration

The central news workflow is coordinated by `NewsOrchestrationService`.

Rather than allowing individual modules to directly control the complete
process, the orchestrator coordinates them in sequence:

``` text
News
 ↓
Novelty
 ↓
Sentiment
 ↓
Journal
```

This provides a single place for coordinating the workflow while keeping
the individual services independently testable.

The pipeline can be triggered through the REST API:

``` http
GET /api/v1/news/orchestrate
```

A simplified response structure is:

``` json
{
  "success": true,
  "statsPipeline": {
    "...": "..."
  },
  "sentimentResults": [
    {
      "title": "...",
      "label": "pos|neg|neu",
      "confidence": 0.87
    }
  ]
}
```

------------------------------------------------------------------------

# Automated News Digest

Betty also includes a notification layer for distributing selected
analysis results through **Telegram**.

`NewsDigestNotifier` can generate a digest containing the Top-K selected
signals and their associated analysis.

The notifier can be executed immediately or controlled through a
scheduled process.

Available API operations include:

``` http
POST /api/v1/notifiers/digest
POST /api/v1/notifiers/digest/schedule
POST /api/v1/notifiers/digest/stop
GET  /api/v1/notifiers/digest/status
```

Scheduling is configurable through environment variables, including the
cron expression, timezone, and number of signals included in each
digest.

------------------------------------------------------------------------

# Main Backend Components

| Component | Responsibility |
| --- | --- |
| `NewsService` | Financial-news retrieval, normalization, filtering and FX heuristics |
| `NewsNoveltyService` | Headline comparison, fuzzy deduplication and novelty ranking |
| `NewsOrchestrationService` | Coordinates News → Novelty → Sentiment → Journal |
| `NewsDigestNotifier` | Builds and distributes scheduled Telegram digests |
| `SentimentAdapter` | Decouples sentiment engines from business logic |
| `newsHelpers` | Shared tokenization, Jaccard similarity, FX scoring and NLP utilities |

------------------------------------------------------------------------

# Configuration

Betty uses environment-based configuration to keep operational
parameters outside the source code.

Examples include:

``` text
NEWS_API_KEY
NEWS_DOMAINS

NOVELTY_TOP_K
NOVELTY_DUP_THRESHOLD
NOVELTY_MIN_LEN

DEBUG_NEWS

ENABLE_DAILY_DIGEST
DIGEST_TOPK
DIGEST_CRON
DIGEST_TZ
```

This allows behavior such as novelty thresholds, source filtering,
debugging and notification scheduling to be adjusted without modifying
application logic.

------------------------------------------------------------------------

# Testing Strategy

Testing is treated as part of the backend architecture rather than as a
final validation step.

The project uses **Jest** and **Supertest** and includes automated
testing at different levels:

| Test Level | Purpose |
| --- | --- |
| Unit | Validate isolated functions and business rules |
| Integration | Validate collaboration between application components |
| E2E | Validate complete application flows |
| Contract | Validate expected interfaces and data structures |
| Smoke | Validate critical minimum application behavior |

The project currently maintains **178 automated tests**.

This testing structure helps detect regressions while allowing
individual modules to evolve independently.

------------------------------------------------------------------------

# Engineering Decisions

### Layered responsibilities

Routes, controllers, services and integration components are separated
to prevent HTTP logic from becoming mixed with business rules.

### Adapter-based integrations

External or replaceable analysis engines are accessed through adapters,
reducing coupling between Betty and individual providers.

### Configurable business rules

Parameters such as novelty thresholds, Top-K limits and notification
scheduling are externalized through configuration.

### Duplicate-aware information processing

Financial-news providers frequently return multiple headlines describing
the same event. Betty therefore performs exact and fuzzy duplicate
filtering before downstream analysis.

### Centralized orchestration

Individual analysis services remain focused on one responsibility while
orchestration services coordinate complete workflows.

### Testability

Business logic is intentionally kept outside controllers wherever
possible, making individual rules and services easier to test without
requiring complete HTTP requests.

------------------------------------------------------------------------

# Technologies

**Backend**

`JavaScript` · `Node.js` · `Express.js`

**Data & persistence**

`PostgreSQL` · `Supabase` · `MongoDB`

**Testing**

`Jest` · `Supertest`

**External integrations**

`NewsAPI` · `Telegram API` · `Axios`

**Validation & application infrastructure**

`Zod` · `dotenv` · `node-cron`

**Development**

`Git` · `npm`

------------------------------------------------------------------------

# What This Project Demonstrates

Betty has been an opportunity to apply backend-development concepts to a
system with real data-processing requirements rather than isolated
programming exercises.

The project demonstrates practical experience with:

-   designing modular Node.js backend services
-   building REST API endpoints
-   integrating third-party APIs
-   processing and normalizing external data
-   implementing configurable business rules
-   separating HTTP, business and integration concerns
-   designing adapter-based components
-   orchestrating multi-step backend workflows
-   implementing automated testing at multiple levels
-   handling scheduled backend processes
-   building notification integrations
-   structuring a growing backend codebase for maintainability

------------------------------------------------------------------------

# Current Status

Betty is an **actively developed private project**.

The architecture is designed to allow additional financial-analysis
modules and market-data sources to be integrated progressively while
preserving separation between data acquisition, analysis, orchestration,
and output.

The source repository remains private, but this technical overview is
provided to document the project's implemented backend concepts,
architecture, and engineering approach.

------------------------------------------------------------------------

## Author

**Carlos Alberto Kaar**\
Junior Backend Developer

**Focus:** Node.js · Express.js · REST APIs · Backend Architecture ·
Automated Testing
