# The definitive guide to digital product metrics

Product teams that measure the right things grow faster—**top-quartile companies tracking Net Revenue Retention above 100% grow at twice the rate of their peers**. Yet most teams drown in data while starving for insight. This knowledge base cuts through the noise by cataloging every significant product metric, rating each on actionability and predictive power, and mapping which metrics matter most at each company stage.

The research synthesizes guidance from Amplitude, Mixpanel, Reforge, Lenny's Newsletter, Y Combinator, and analytics from thousands of companies. The core finding: a handful of metrics—**retention, activation rate, and Net Revenue Retention**—consistently predict success across business models, while dozens of commonly tracked metrics qualify as "vanity metrics" that feel good but rarely drive decisions.

## How to evaluate any metric: the quality framework

Before diving into specific metrics, understanding what makes a metric valuable prevents teams from optimizing the wrong numbers. The Lean Analytics framework identifies four essential criteria: metrics must be **comparative** (trackable across time and segments), **understandable** (simple enough to remember and discuss), expressed as **ratios rather than absolute numbers** (inherently normalized), and most critically, **behavior-changing**—if a metric won't alter decisions, it's worthless regardless of precision.

Beyond these basics, metrics exist on several spectrums. **Leading indicators** predict future outcomes and allow intervention; **lagging indicators** explain what already happened. **Exploratory metrics** reveal unknown patterns; **reporting metrics** track operational health. The most dangerous category is **vanity metrics**—statistics that look impressive but don't connect to business outcomes.

**Proposed rating system for metric quality:**

| Rating Dimension | Definition | Scale |
|------------------|------------|-------|
| **Actionability** | Can decisions be made from changes in this metric? | 1-5 (5 = directly drives specific actions) |
| **Predictive Power** | Does it forecast future business outcomes? | 1-5 (5 = strong correlation with revenue/retention) |
| **Measurement Reliability** | Can it be consistently and accurately tracked? | 1-5 (5 = standardized, objective, clean data) |
| **Leading Status** | Is it upstream of outcomes (leading) or downstream (lagging)? | L/LAG |

A composite **Metric Value Score** of 12+ (out of 15) indicates a high-quality metric worthy of executive dashboards. Scores below 8 suggest potential vanity metrics requiring scrutiny.

---

## Retention metrics: the foundation everything else builds on

Retention is the single most important metric category. Brian Balfour of Reforge argues retention "is the center of the growth engine—the thing that moves everything else." Without retention, acquisition becomes a leaky bucket exercise. Every other metric loses meaning if users don't stick around.

### Day 1/7/30 retention (N-day retention)

**Definition:** Percentage of users active on Day N after signup. Day 1 measures onboarding success; Day 7 indicates early habit formation; Day 30 reflects sustained value delivery.

**Calculation:** Users active on Day N ÷ Users who signed up on Day 0 × 100

**Benchmarks by app category (2024-2025 data):**

| Category | Day 1 | Day 7 | Day 30 |
|----------|-------|-------|--------|
| All apps average | 25-26% | 11-13% | 6-7% |
| Banking/Fintech | 30% | 18% | 8-9% |
| Marketplace apps | 34% | 16% | 9% |
| E-commerce | 25% | 11% | 6% |
| Gaming | 27-33% | 13% | 5% |
| Social | 26% | 9% | 3% |

**Quality rating:** Actionability: 5 | Predictive: 5 | Reliability: 4 | Status: Leading
**Total: 14/15** — Essential metric for all products

### Churn rate

**Definition:** Percentage of customers lost during a period. Revenue churn (lost MRR ÷ starting MRR) matters more than logo churn (customers lost ÷ starting customers) because losing one $10K customer differs vastly from losing ten $100 customers.

**Benchmarks:**

| Segment | Good Monthly Churn | Great Monthly Churn |
|---------|-------------------|---------------------|
| B2C SaaS | 3-5% | <2% |
| B2B SMB/Mid-Market | 2.5-5% | <1.5% |
| B2B Enterprise | 1-2% | <0.5% |

**Critical insight:** 5% monthly churn compounds to **46% annual churn**—seemingly small monthly numbers create existential problems.

**Quality rating:** Actionability: 4 | Predictive: 5 | Reliability: 5 | Status: Lagging
**Total: 14/15**

### Cohort retention and retention curves

**Definition:** Retention analyzed by user groups who joined during the same period, visualized as curves showing dropout over time.

**Key insight:** Healthy retention curves flatten into a horizontal asymptote; continuously declining curves indicate fundamental product problems. Best-in-class consumer products eventually flatten at **20-30%+ long-term retention**.

**Cohort retention benchmarks (6-month user retention):**

| Business Type | Good | Great |
|---------------|------|-------|
| Consumer Social | 25% | 45% |
| Consumer Transactional | 30% | 50% |
| Consumer SaaS | 40% | 70% |
| SMB/Mid-market SaaS | 60% | 80% |
| Enterprise SaaS | 75% | 90% |

**Quality rating:** Actionability: 5 | Predictive: 5 | Reliability: 4 | Status: Lagging (with predictive value)
**Total: 14/15** — Gold standard for retention analysis

---

## Engagement metrics: measuring the depth of user connection

Engagement metrics reveal whether users derive ongoing value, serving as leading indicators for retention and monetization.

### DAU/MAU ratio (stickiness)

**Definition:** Daily Active Users ÷ Monthly Active Users. A 20% ratio means users engage roughly 6 days per month.

**Benchmarks:**

| Product Type | Average | Good | Great |
|--------------|---------|------|-------|
| B2B SaaS | 13% | 20-25% | 40%+ |
| B2C Apps | 20% | 25-35% | 50%+ |
| Messaging Apps | — | 50%+ | 60%+ |
| Facebook | 68.7% | — | — |

**When NOT to use:** Products designed for infrequent use (Airbnb, TurboTax, travel apps) will naturally show low stickiness without indicating problems.

**Quality rating:** Actionability: 4 | Predictive: 5 | Reliability: 4 | Status: Leading
**Total: 13/15**

### Feature adoption rate

**Definition:** Percentage of active users who use a specific feature. Tracks breadth (how many features used), depth (intensity of use), and duration (sustained use).

**Benchmarks:** **20-30% adoption** is reasonable for most SaaS features, though highly variable by feature importance.

**Quality rating:** Actionability: 5 | Predictive: 4 | Reliability: 3 | Status: Leading
**Total: 12/15**

### Session metrics (duration, frequency, pages per session)

These metrics provide context but are **often vanity metrics** when tracked in isolation. Average session duration benchmarks range from **77 seconds for B2B websites** to **3-4 minutes for e-commerce**. Pages per session averages 1.7-4.0, with e-commerce higher at 5.6.

**Critical caveat:** Longer sessions aren't always better—high duration may indicate confusion rather than engagement. These metrics require pairing with conversion data to become actionable.

**Quality rating:** Actionability: 2 | Predictive: 2 | Reliability: 4 | Status: Lagging
**Total: 8/15** — Low value alone; useful in context

---

## Monetization and revenue metrics: the unit economics that determine viability

### Net Revenue Retention (NRR)

**Definition:** Revenue retained from existing customers including expansion, contraction, and churn. The single most important metric for sustainable SaaS growth.

**Calculation:** (Starting MRR + Expansion - Contraction - Churn) ÷ Starting MRR × 100

**Benchmarks (2024):**

| NRR Level | Interpretation |
|-----------|----------------|
| Below 100% | Losing money from existing customers |
| 100-110% | Solid retention with modest expansion |
| 110-120% | Strong expansion, good product-market fit |
| 120%+ | Exceptional (usage-based or platform companies) |

**Median private SaaS NRR dropped to 101%** in 2024 (down from 105% in 2021). Companies with NRR ≥100% grow at **2x the rate** of lower-NRR companies.

**Quality rating:** Actionability: 5 | Predictive: 5 | Reliability: 5 | Status: Leading
**Total: 15/15** — Best-in-class metric

### LTV:CAC ratio

**Definition:** Customer Lifetime Value divided by Customer Acquisition Cost.

**Benchmarks:**

| Ratio | Interpretation |
|-------|----------------|
| <1:1 | Unsustainable—losing money on every customer |
| 1-3:1 | Break-even zone; focus on retention |
| **3:1** | Industry standard target |
| 3-5:1 | Sweet spot for B2B SaaS |
| >5:1 | May be underinvesting in growth |

**Quality rating:** Actionability: 4 | Predictive: 5 | Reliability: 3 | Status: Leading
**Total: 12/15**

### CAC payback period

**Definition:** Months to recover customer acquisition costs.

**Calculation:** CAC ÷ (Monthly ARPA × Gross Margin %)

**Benchmarks:**

| Segment | Target Payback |
|---------|---------------|
| SMB | <12 months |
| Mid-Market | <18 months |
| Enterprise | <24 months |
| Top quartile | <14 months |

**Quality rating:** Actionability: 5 | Predictive: 4 | Reliability: 4 | Status: Leading
**Total: 13/15**

### Trial-to-paid conversion rate

**Definition:** Percentage of trial users who become paying customers.

**Benchmarks (2024-2025):**

| Trial Type | Conversion Rate |
|------------|-----------------|
| Opt-in (no credit card) | 18-25% |
| Opt-out (credit card required) | 49-60% |
| Best-in-class opt-out | >60% |

**Counterintuitive finding:** Shorter trials (7 days) convert at **40%** versus **31%** for 60+ day trials—scarcity drives action.

**Quality rating:** Actionability: 5 | Predictive: 4 | Reliability: 5 | Status: Leading
**Total: 14/15**

### Quick Ratio (SaaS)

**Definition:** Measures growth efficiency by comparing revenue gains to losses.

**Calculation:** (New MRR + Expansion MRR) ÷ (Churned MRR + Contraction MRR)

**Benchmarks:**

| Quick Ratio | Interpretation |
|-------------|----------------|
| <1 | Losing more than gaining—urgent |
| 1-2 | Minimally sustainable |
| 2-4 | Healthy growth |
| **4+** | VC benchmark for early-stage |

**Quality rating:** Actionability: 4 | Predictive: 4 | Reliability: 5 | Status: Leading
**Total: 13/15**

---

## Acquisition and growth metrics

### Customer Acquisition Cost (CAC)

**Definition:** Total sales and marketing cost to acquire one customer.

**Benchmarks by industry:**

| Industry | Average CAC |
|----------|-------------|
| SaaS (Overall) | $702 |
| Fintech | $1,450 |
| E-commerce | $274 |

**Limitation:** No standardized calculation method exists—companies calculate CAC differently, making benchmarking imprecise.

**Quality rating:** Actionability: 4 | Predictive: 3 | Reliability: 3 | Status: Lagging
**Total: 10/15**

### Activation rate

**Definition:** Percentage of signups reaching the product's "aha moment"—the critical point where users first experience value.

**Famous activation moments:**
- **Facebook:** Adding 7 friends within 10 days
- **Dropbox:** Uploading first file
- **Slack:** 2,000 messages sent by team
- **Twitter:** Following 30 users

**Benchmarks:** Target **60-70%+**; excellent is **80%+**.

**Why it matters:** Adam Fishman notes activation "is the only part of your product experience that 100% of people are going to touch." Poor activation cascades into poor retention regardless of product quality.

**Quality rating:** Actionability: 5 | Predictive: 5 | Reliability: 4 | Status: Leading
**Total: 14/15**

### Viral coefficient (K-factor)

**Definition:** Number of new users each existing user generates through referrals.

**Calculation:** Invites per user × Conversion rate of invites

**Benchmarks:**

| K-Factor | Interpretation |
|----------|----------------|
| >1.0 | Viral/exponential growth |
| 0.5-1.0 | Strong growth with marketing support |
| 0.2-0.5 | Typical for most products |
| <0.2 | Low virality |

**Real-world examples:** Square achieved K-factor of **0.73** (exceptional for B2B). Typical B2B SaaS is **0.2**.

**Quality rating:** Actionability: 3 | Predictive: 3 | Reliability: 3 | Status: Leading
**Total: 9/15** — Context-dependent value

### Growth accounting framework

**Definition:** Decomposes user growth into component parts: New, Retained, Resurrected, and Churned users.

**Key equation:** MAU Growth = New + Resurrected - Churned

**User Quick Ratio:** (New + Resurrected) ÷ Churned
- Above 1: Growing
- 4+: Excellent for SaaS
- 1.5-2.0: Very good for consumer apps

This framework, popularized by Tribe Capital, is now **standard for VC due diligence** and growth-stage company analysis.

---

## Customer satisfaction metrics

### Net Promoter Score (NPS)

**Definition:** Single-question metric asking likelihood to recommend on 0-10 scale. Score = % Promoters (9-10) minus % Detractors (0-6).

**Benchmarks:**
- Below 0: Needs significant improvement
- 0-30: Good
- 30-70: Excellent
- 70+: World-class

**Limitations:** Industry averages vary wildly (Grocery ~33, Consumer payments ~-6). **Self-reported scores lack standardization**, and linking NPS to employee bonuses corrupts data integrity.

**Quality rating:** Actionability: 2 | Predictive: 3 | Reliability: 3 | Status: Lagging
**Total: 8/15** — Popular but lower-quality metric

### Product-Market Fit Score (Sean Ellis Test)

**Definition:** Survey asking "How would you feel if you could no longer use [product]?" Score = % answering "Very disappointed."

**Benchmark:** **40%+ "very disappointed" indicates product-market fit**. Slack scored 51% when validating PMF.

**Why it works:** This leading indicator predicts growth potential before traction materializes, making it essential for early-stage companies.

**Quality rating:** Actionability: 4 | Predictive: 5 | Reliability: 3 | Status: Leading
**Total: 12/15**

### Customer Effort Score (CES)

**Definition:** Measures ease of customer interactions on 7-point scale.

**Key finding:** CES is a **better predictor of churn than CSAT**, making it increasingly popular for support teams.

---

## Technical performance metrics that impact product success

### Core Web Vitals

Google's official performance benchmarks directly impact SEO and user experience:

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| **LCP** (Largest Contentful Paint) | ≤2.5s | 2.5-4.0s | >4.0s |
| **INP** (Interaction to Next Paint) | <200ms | 200-500ms | >500ms |
| **CLS** (Cumulative Layout Shift) | <0.1 | 0.1-0.25 | >0.25 |

**Critical stat:** Only **20% of websites pass all three Core Web Vitals**.

### App crash rate

**Benchmarks:**
- Target crash-free sessions: **>99.5%**
- Excellent apps: >99.95% crash-free
- **>2% crash rate requires immediate action**

**Impact:** 80% of users abandon apps after 3 crashes; 62% uninstall after experiencing crashes or errors.

### Uptime/availability

| Uptime Level | Annual Downtime | Use Case |
|--------------|-----------------|----------|
| 99.999% (Five 9s) | 5.26 minutes | Banking, healthcare |
| 99.99% (Four 9s) | 52.56 minutes | Cloud providers, enterprise |
| 99.9% (Three 9s) | 8.76 hours | Common SLA standard |

---

## Vanity metrics: what to stop tracking

**Vanity metrics look impressive but don't drive decisions.** The test: "If this metric goes up, down, or stays flat, what will you do differently?" If the answer is unclear, it's likely vanity.

**Common vanity metrics to deprioritize:**
- Total registered users (without activity context)
- Page views (without conversion data)
- Total downloads (without activation data)
- Social followers (without engagement context)
- Time on site (without understanding why)
- Cumulative signups (the number only goes up)

**Transform vanity into actionable:**

| Vanity | Actionable Alternative |
|--------|----------------------|
| Total users | Monthly Active Users, Retention rate |
| Page views | Conversion rate, Bounce rate |
| Downloads | Activation rate, Trial-to-paid |
| Total MQLs | MQL-to-SQL conversion, Cost per qualified lead |

---

## The North Star Metric framework

A North Star Metric is the single metric that best captures core customer value. Amplitude's research across 11,000+ companies identifies three "games" products play:

| Game | Focus | Typical NSM |
|------|-------|-------------|
| **Attention** | Time in product | Watch time, Time spent |
| **Transaction** | Number of transactions | Bookings, Purchases |
| **Productivity** | Efficiency of work | Tasks completed, Documents created |

**Famous North Star Metrics:**
- **Airbnb:** Nights booked
- **Spotify:** Time spent listening
- **Netflix:** Median view hours per month
- **Slack:** Daily Active Users or Messages sent
- **Amplitude:** Weekly Learning Users (users sharing learnings consumed by 2+ others)

**Warning:** ~50% of growth-stage companies use revenue as their NSM, but many argue this leads to suboptimal decisions. Airbnb, Netflix, and Spotify explicitly avoid revenue as their primary metric.

---

## Stage-specific metric priorities

Metrics that matter shift dramatically based on company stage:

### Pre-product-market fit

**Primary question:** "Am I building something people want?"

**Focus metrics:**
- Sean Ellis Test (target 40%+ "very disappointed")
- Cohort retention curves
- Qualitative feedback from interviews
- Active usage patterns

**Avoid optimizing:** Revenue, CAC/LTV, scaling metrics—it's too early.

### Growth stage (post-PMF)

**Primary question:** "How do we deliver validated value to more customers efficiently?"

**Focus metrics:**
- North Star Metric (appropriate to define now)
- Activation rate and funnel conversion
- Acquisition by channel
- Feature adoption

### Scale/mature stage

**Primary question:** "How do we grow efficiently and sustainably?"

**Focus metrics:**
- LTV:CAC ratio (target 3:1+)
- CAC payback period (<18 months)
- Net Revenue Retention (>100%)
- Gross margin optimization

---

## Comprehensive metric reference by prevalence

### Tier 1: Universal metrics (tracked by nearly all product teams)

| Metric | Category | Quality Score | Vanity Risk |
|--------|----------|---------------|-------------|
| Net Revenue Retention | Monetization | 15/15 | Low |
| Day 1/7/30 Retention | Retention | 14/15 | Low |
| Churn Rate | Retention | 14/15 | Low |
| Activation Rate | Acquisition | 14/15 | Low |
| Trial-to-Paid Conversion | Monetization | 14/15 | Low |
| DAU/MAU/WAU | Engagement | 12/15 | Medium |
| ARR/MRR | Revenue | 13/15 | Low |

### Tier 2: Commonly tracked (majority of product teams)

| Metric | Category | Quality Score | Vanity Risk |
|--------|----------|---------------|-------------|
| LTV:CAC Ratio | Monetization | 12/15 | Low |
| CAC Payback | Monetization | 13/15 | Low |
| Quick Ratio | Growth | 13/15 | Low |
| Feature Adoption | Engagement | 12/15 | Medium |
| NPS | Satisfaction | 8/15 | High |
| Cohort Retention | Retention | 14/15 | Low |

### Tier 3: Specialized metrics (used by sophisticated teams)

| Metric | Category | Quality Score | Vanity Risk |
|--------|----------|---------------|-------------|
| Resurrection Rate | Retention | 11/15 | Low |
| K-Factor | Growth | 9/15 | Medium |
| Growth Accounting | Growth | 12/15 | Low |
| CES | Satisfaction | 11/15 | Low |
| PMF Score | Satisfaction | 12/15 | Low |

### Tier 4: Context-dependent (valuable in specific scenarios)

| Metric | Category | When Valuable | Vanity Risk |
|--------|----------|---------------|-------------|
| Session Duration | Engagement | Content/media products | High |
| Page Views | Engagement | Ad-revenue models | High |
| Total Users | Growth | Never—always use active | High |
| Social Followers | Acquisition | Brand awareness campaigns | High |

---

## Conclusion: metrics strategy over metrics quantity

The most effective product teams don't track more metrics—they track **fewer, better metrics** tied directly to customer value and business outcomes. The research reveals consistent patterns: **retention metrics predict success better than growth metrics**, leading indicators beat lagging indicators, and ratios outperform absolute numbers.

Three strategic principles emerge. First, **retention is foundational**—without it, acquisition becomes waste. Second, **Net Revenue Retention is the closest thing to a universal success metric** for subscription businesses, correlating with growth rate, efficiency, and long-term viability. Third, **the Sean Ellis Test and activation rate provide the earliest reliable signals** of product-market fit, allowing intervention before lagging metrics reveal problems.

For teams building their metrics stack: start with a North Star Metric aligned to customer value, support it with 3-5 input metrics you can directly influence, and ruthlessly eliminate vanity metrics that feel good but change nothing. The goal isn't comprehensive measurement—it's actionable insight that drives better products.