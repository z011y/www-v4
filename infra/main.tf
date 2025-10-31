resource "vercel_project" "www" {
  name           = "www"
  framework      = "nextjs"
  team_id        = "team_2fV8FjqtZJCtNAILhE4tqTsH"
  git_repository = {
    type = "github"
    repo = "z011y/www-v4"
  }
}

resource "vercel_project_domain" "www" {
  project_id = vercel_project.www.id
  domain     = "z011y.dev"
}

resource "neon_project" "www" {
  name                      = "www"
  pg_version                = 17
  region_id                 = "aws-us-west-2"
  org_id                    = "org-spring-dust-13087242"
  history_retention_seconds = 21600

  branch {
    name          = "prod"
    database_name = "www"
    role_name     = "admin"
  }
}

resource "neon_branch" "dev" {
  project_id = neon_project.www.id
  name       = "dev"
  parent_id  = neon_project.www.default_branch_id
}

resource "neon_endpoint" "dev" {
  project_id               = neon_project.www.id
  branch_id                = neon_branch.dev.id
  type                     = "read_write"
  autoscaling_limit_min_cu = 0.25
  autoscaling_limit_max_cu = 0.25
}