/**
  * OPEN DATA KIT ZULIPBOT CONFIGURATION
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
      "opendatakit/aggregate",
      "opendatakit/briefcase",
      "opendatakit/build",
      "opendatakit/central",
      "opendatakit/central-backend",
      "opendatakit/central-frontend",
      "opendatakit/collect",
      "opendatakit/docs",
      "opendatakit/governance",
      "opendatakit/javarosa",
      "opendatakit/roadmap",
      "opendatakit/slack-server",
      "opendatakit/validate",
      "opendatakit/website",
      "opendatakit/xforms-spec"
      "opendatakit/xlsform-offline",
      "opendatakit/xlsform-online",
      "opendatakit/xlsform-server"
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
