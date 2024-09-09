# AWS CodePipeline Gitflow Demo Service

This is a demo service project to show how to use Gitflow branching model workflow with AWS CodePipeline.

See the [Infrastructure Repository](https://github.com/grigore147/aws-codepipeline-gitflow-demo) for the infrastructure setup.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Branching Model](#branching-model)
- [CI/CD Pipeline](#cicd-pipeline)

## Prerequisites

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/en/)
- [Taskfile](https://taskfile.dev/#/)
- [git-remote-codecommit](https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-git-remote-codecommit.html)

## Getting Started

Clone the repository

```bash
git clone https://github.com/grigore147/aws-codepipeline-gitflow-service-demo.git
```

Install dependencies

```bash
npm ci
```

Run the service locally

```bash
# This will run the service for current branch
task service:run

# or

# This will run the docker:build task before running the service
task service:run-build
```

Run the `task` command to see all available tasks.

After you have made changes to the service, commit and push the changes to the remote CodeCommit repository (the `git-remote-codecommit` tool may be required depending on the method used).

This will trigger the CI/CD pipeline to build and deploy the service to a related environment.

## Branching Model

This project uses the [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) branching model.

## CI/CD Pipeline

The CI/CD pipeline is setup using AWS CodePipeline and AWS CodeBuild. The pipeline is triggered on push to on of the branch that follows gitflow branching model.

See the [Infrastructure Repository](https://github.com/grigore147/aws-codepipeline-gitflow-demo) for more details.
