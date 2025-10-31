-- Insert achievements for Awardco positions
-- Engineering Manager, Platform Group achievements
INSERT INTO achievement (description, position_id)
VALUES
  (
    'Guided the technical and organizational strategy of 5 cross-functional engineering teams delivering analytics, AI/ML, and platform services, partnering with product leaders to define the long-term roadmap and determine resources.',
    (SELECT id FROM position WHERE name = 'Engineering Manager, Platform Group' AND company_id = (SELECT id FROM company WHERE name = 'Awardco'))
  ),
  (
    'Managed and developed 4 technical leads, providing technical guidance, performance management, and growth opportunities, with 2 reports growing into group-level roles.',
    (SELECT id FROM position WHERE name = 'Engineering Manager, Platform Group' AND company_id = (SELECT id FROM company WHERE name = 'Awardco'))
  ),
  (
    'Established strategy and architecture for a unified data platform, powering analytics and AI/ML use cases across the org, including data ingestion, modeling, and transformation with PySpark, and ML model training, inference, evaluation, and observability.',
    (SELECT id FROM position WHERE name = 'Engineering Manager, Platform Group' AND company_id = (SELECT id FROM company WHERE name = 'Awardco'))
  );

-- Technical Lead, AI/ML achievements
INSERT INTO achievement (description, position_id)
VALUES
  (
    'Led an AI Task Force, consisting of 12 members across multiple functions, driving company-wide adoption of AI, including policy creation, training, executive strategy alignment, and POCs.',
    (SELECT id FROM position WHERE name = 'Technical Lead, AI/ML' AND company_id = (SELECT id FROM company WHERE name = 'Awardco'))
  ),
  (
    'Hired and led 2 senior ML engineers to deliver the company''s first machine learning initiative, a classification model based on XGBoost, establishing foundational architecture for ML and AI.',
    (SELECT id FROM position WHERE name = 'Technical Lead, AI/ML' AND company_id = (SELECT id FROM company WHERE name = 'Awardco'))
  ),
  (
    'Delivered production-ready systems for generative AI and machine learning capabilities.',
    (SELECT id FROM position WHERE name = 'Technical Lead, AI/ML' AND company_id = (SELECT id FROM company WHERE name = 'Awardco'))
  );

-- Technical Lead, Insights achievements
INSERT INTO achievement (description, position_id)
VALUES
  (
    'Led and mentored a team of 7 BE, FE, and QA engineers, providing technical guidance and project management, with 8 engineers, collectively, growing into tech lead, architect, or manager roles.',
    (SELECT id FROM position WHERE name = 'Technical Lead, Insights' AND company_id = (SELECT id FROM company WHERE name = 'Awardco'))
  ),
  (
    'Built the foundational architecture for analytics tooling, enabling engineering teams to construct fast and scalable queries with complex filtering and powerful visualizations, and reducing implementation time for analytics-based features.',
    (SELECT id FROM position WHERE name = 'Technical Lead, Insights' AND company_id = (SELECT id FROM company WHERE name = 'Awardco'))
  ),
  (
    'Created and maintained data pipelines to generate novel insights and reduce dashboard load time.',
    (SELECT id FROM position WHERE name = 'Technical Lead, Insights' AND company_id = (SELECT id FROM company WHERE name = 'Awardco'))
  );

-- Software Test Engineer achievements
INSERT INTO achievement (description, position_id)
VALUES
  (
    'Implemented an end-to-end testing framework with Cypress, in use across 16 engineering teams.',
    (SELECT id FROM position WHERE name = 'Software Test Engineer' AND company_id = (SELECT id FROM company WHERE name = 'Awardco'))
  ),
  (
    'Built the company''s CI/CD strategy for end-to-end tests, increasing release confidence.',
    (SELECT id FROM position WHERE name = 'Software Test Engineer' AND company_id = (SELECT id FROM company WHERE name = 'Awardco'))
  ),
  (
    'Designed a scalable load testing strategy with Locust, reducing performance regressions.',
    (SELECT id FROM position WHERE name = 'Software Test Engineer' AND company_id = (SELECT id FROM company WHERE name = 'Awardco'))
  );

-- Insert achievements for DoTERRA positions
-- QA Analyst achievements
INSERT INTO achievement (description, position_id)
VALUES
  (
    'Designed, executed, and automated test plans for an ecommerce platform.',
    (SELECT id FROM position WHERE name = 'QA Analyst' AND company_id = (SELECT id FROM company WHERE name = 'DoTERRA'))
  );

