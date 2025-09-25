terraform {
  required_providers {
    neon = {
      source  = "kislerdm/neon"
    }
  }
}

provider "neon" {}

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
