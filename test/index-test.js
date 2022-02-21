"use strict";
import TextLintTester from "textlint-tester";
const tester = new TextLintTester();
// rule
import rule from "../src/index";
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: [
        // no problem
        "We therefore considered the workload of leaders.",
        "This material is hard but brittle.",
        "It was hellish and terrible.",
        "It was especially hot yesterday.",
        "It was particularly hot yesterday.",
    ],
    invalid: [
        // single match
        {
            text: "Therefore we considered the workload of leaders.",
            errors: [
                {
                    message: "The word 'Therefore' would be better to place just after the subject.",
                    line: 1,
                    column: 1
                }
            ]
        },
        {
            text: "But we have to change it.",
            errors: [
                {
                    message: "The sentence begin with 'But' should not be used.",
                    line: 1,
                    column: 1
                }
            ]
        },
        {
            text: "And it was terrible.",
            errors: [
                {
                    message: "The sentence begin with 'And' should not be used.",
                    line: 1,
                    column: 1
                }
            ]
        },
        {
            text: "Generally the size of problem is restrected with N.",
            errors: [
                {
                    message: "'Generally' at the beginning of a sentence should be replaced with 'In general,'.",
                    line: 1,
                    column: 1
                }
            ]
        },
        {
            text: "Especially it was hot yesterday.",
            errors: [
                {
                    message: "The word 'Especially' should be move to the middle of a sentence or replaced with 'In particular,'.",
                    line: 1,
                    column: 1
                }
            ]
        },
        {
            text: "Particularly it was hot yesterday.",
            errors: [
                {
                    message: "The word 'Particularly' should be move to the middle of a sentence or replaced with 'In particular,'.",
                    line: 1,
                    column: 1
                }
            ]
        },
        {
            text: "Firstly we have changed preconditions.",
            errors: [
                {
                    message: "The word 'firstly' would be better to replaced with 'first'.",
                    line: 1,
                    column: 1
                }
            ]
        },
        {
            text: `It is thought
             that the effectiveness affects to the project budget.`,
            errors: [
                {
                    message: "The sentence 'It is thought that' would not be better to use in a formal paper.",
                    line: 1,
                    column: 1
                }
            ]
        },
        {
            text: `It is assumed that the effectiveness affects to the project budget.`,
            errors: [
                {
                    message: "The sentence 'It is assumed that' would not be better to use in a formal paper.",
                    line: 1,
                    column: 1
                }
            ]
        },
        {
            text: "This method is supposed to be effective.",
            errors: [
                {
                    message: "The word 'suppose' would not be better to use in a formal paper. The word 'presume' or 'consider' would be better.",
                    line: 1,
                    column: 16
                }
            ]
        },
        {
            text: "It is a good guess that it is effective.",
            errors: [
                {
                    message: "The word 'guess' would not be better to use in a formal paper. The word 'presume' or 'consider' would be better.",
                    line: 1,
                    column: 14
                }
            ]
        },
        {
            text: `Therefore it is problematic. But we have to change it.`,
            errors: [
                {
                    message: "The word 'Therefore' would be better to place just after the subject.",
                    line: 1,
                    column: 1
                },
                {
                    message: "The sentence begin with 'But' should not be used.",
                    line: 1,
                    column: 30
                }
            ]
        },
    ]
});