/**
  * ODK ZULIPBOT CONFIGURATION
  *
  * See https://github.com/zulip/zulipbot/wiki/configuration for detailed
  * explanations on each option.
  */

exports.issues = {
  commands: {
    assign: {
      claim: ["claim"],
      abandon: ["abandon", "unclaim", "abort"],
      limit: 1,
      newContributors: {
        permission: "pull",
        restricted: 2,
        warn: {
          labels: ["help wanted", "good first issue"],
        }
      }
    },
    label: {
      add: ["label", "add"],
      remove: ["unlabel", "remove"]
    }
  }
};

exports.pulls = {
  status: {
    mergeConflicts: true,
    wip: "WIP"
  }
};

exports.activity = {
  inactive: "inactive",
  check: {
    repositories: [
      "getodk/aggregate",
      "getodk/aggregate-cli",
      "getodk/aggregate-components",
      "getodk/briefcase",
      "getodk/build",
      "getodk/build2xlsform",
      "getodk/central",
      "getodk/central-backend",
      "getodk/central-frontend",
      "getodk/collect",
      "getodk/docs",
      "getodk/governance",
      "getodk/javarosa",
      "getodk/roadmap",
      "getodk/skunkworks-crow",
      "getodk/slack-server",
      "getodk/validate",
      "getodk/website",
      "getodk/xforms-spec",
      "getodk/xlsform-offline",
      "getodk/xlsform-online",
      "getodk/xlsform-server"
    ],
    interval: 1, // heroku restarts every 2 hrs and resets counter, so check hourly.
    reminder: 10,
    limit: 5
  },
  issues: {
    inProgress: "in progress",
    clearClosed: true
  },
  pullRequests: {
    reviewed: {
      label: "reviewed"
    },
    needsReview: {
      label: "needs review",
      ignore: true
    }
  }
};