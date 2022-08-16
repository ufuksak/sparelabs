const common = {
    paths: [
        'src/features/**/*.feature'
    ],
    publishQuiet: true,
    publish: false,
    requireModule: ['ts-node/register'],
    require: [
        'src/step-definitions/**/*.ts'
    ],
}

const CITags = 'not (@before-update or @after-update or @wip or @need-steps or @needs-implementation)'

module.exports = {
    debug: {
        ...common,
        format: [
            '@cucumber/pretty-formatter'
        ],
        tags: '@debug or @debug-me'
    },
    performanceTest: {
        ...common,
        paths: [
            'src/performance-tests/**/*.feature'
        ],
        format: [
            '@cucumber/pretty-formatter'
        ],
        tags: CITags
    },
    ci: {
        ...common,
        format: [
            '@cucumber/pretty-formatter',
            'json:build/cucumber-report.json'
        ],
        tags: CITags
    },

    beforeUpdate: {
        ...common,
        format: [
            '@cucumber/pretty-formatter',
            'json:build/cucumber-report.json'
        ],
        tags: '@before-update and not (@wip or @need-steps or @needs-implementation)'
    },

    afterUpdate: {
        ...common,
        format: [
            '@cucumber/pretty-formatter',
            'json:build/cucumber-report.json'
        ],
        tags: '@after-update and not (@wip or @need-steps or @needs-implementation)'
    },

    missingSteps: {
        ...common,
        format: ["snippets"],
        formatOptions: {
            snippetInterface: "async-await",
            snippetSyntax: "./cucumber-missing-steps.js"
        },
        dryRun: true
    }
}
