# FACTS: single source of truth

This file is the canonical record for facts that appear across the portfolio.
Every page and data file should match it. When a fact changes, update it here
first, then align the surfaces listed.

## Identity

- Name: Peter Tinashe Mundowa
- Role: Data Scientist at AI Creative Solutions
- Location: Harare, Zimbabwe (CAT, UTC+2)
- Site: https://petermundowa.com

## Education

- BSc in Data Science and Informatics, University of Zimbabwe.
- Result: Upper Second Class Honours (2.1). Confirmed pass and graduate.
- Graduation ceremony: August 2026.

## The two computer-vision projects (do not merge them)

1. **Tomato dissertation (COMPLETED, DEPLOYED).**
   - Hybrid CNN-Transformer for tomato leaf disease detection. This is the BSc
     dissertation and the proof of concept.
   - Architecture (ground truth from model.py): ResNet18 feature extractor to a
     512-channel 7x7 map; two parallel branches (CNN global-average-pool to a
     256-dim vector, and 49 spatial tokens to 256 dims with a learnable CLS
     token and positional embeddings); a 4-layer Transformer encoder (8 heads,
     GELU MLP, pre-norm); late fusion (512-dim) into an MLP head. embed_dim 256.
   - It is a hybrid CNN-Transformer, NOT a Vision Transformer.
   - Do NOT state a specific total parameter count (unverified).
   - The +36pt low-light F1 result belongs to THIS tomato work.
   - Live demo: https://tomato-leaf-disease-detector-peter.streamlit.app/
   - Repo: https://github.com/PeterTheDataScientist/Tomato-Leaf-Disease-Detector
   - Site page: /work/applied-ml-research

2. **ZimCropGuard (ONGOING RESEARCH, not finished).**
   - Multi-crop disease detection: 5 crops, 21+ disease classes, 54,000+ images.
   - Architecture: EfficientNetB0 (local texture) and ViT-B/16 (global
     structure), feature-concatenated and fused through learned dense layers
     (a learned-fusion ensemble, not simple averaging).
   - Hypothesis: lab-trained models (e.g. PlantVillage) underperform on real
     African field conditions; domain-adaptive training closes the gap.
   - Staged training: freeze and pretrain, head training, full fine-tune,
     domain calibration on mixed lab-plus-field images with focal loss.
   - Status: research in progress. Results are preliminary. No final accuracy
     claims.
   - Won Best Poster, IndabaX Zimbabwe 2026. Selected to represent Zimbabwe at
     the Deep Learning Indaba 2027.
   - Site page: /work/zimcropguard

Nothing may call ZimCropGuard the dissertation, and nothing may call the tomato
project "ongoing". The award (Best Poster) belongs to ZimCropGuard.

## Zindi

- Zindi Ambassador for Zimbabwe, appointed **August 2025** (not 2024).

## Microsoft certifications

- Earned **2025, renewed 2026**. Every surface that shows a year must read
  "2025 (renewed 2026)" or equivalent. No surface may show only 2025 or only
  2026 in isolation.
- Three certs: Azure AI Engineer Associate, Azure Data Scientist Associate,
  Power BI Data Analyst Associate. Verify links point to learn.microsoft.com.

## Right for Education (R:Ed) Zimbabwe Chapter

- Author: February 2024 to present (current, ongoing).
- Vice President: August 2024 to October 2025.
- President: October 2025 to May 2026.
- Present-tense "leads the chapter" phrasing should be used where consistent
  with the ITU News article. The About timeline shows the VP-then-President
  progression with the exact dates above. See open question below.

## AI-agent claim discipline

- "Architecturally impossible" (re fabricated answers) appears on AT MOST ONE
  surface: the AI-agent case study body (/work/ai-agent-orchestration).
- Everywhere else, use the precise claim only: the model never performs
  calculations; every figure is computed by deterministic code from query
  results, so fabricated NUMBERS cannot occur. Do not claim the model cannot
  misinterpret or mis-contextualise, only that it cannot invent figures.

## Client confidentiality

- Do not name "Openbravo" anywhere. Use "a PostgreSQL-based ERP" (or
  "PostgreSQL-based ERP platform"). "SAP Business One" is fine to name.

## Open question for Peter

- R:Ed present tense: the audit asked for present-tense "currently leads the
  chapter", but the supplied dates end the presidency in May 2026, and the
  current standing role is Author. The site currently states Author (to
  present) plus former President and Vice President with dates, which is
  accurate. If you are still formally leading the chapter, tell me and I will
  switch the phrasing to present-tense leadership.
