export default function (context, options = {}) {
    const { Syntax, RuleError, report, getSource } = context;
    return {
        [Syntax.Str](node) { // "Str" node
            const text = getSource(node); // Get text

            const matchesTherefore = /Therefore/g.exec(text);
            if (matchesTherefore) {
                report(node, new RuleError("The word 'Therefore' would be better to place just after the subject.", {
                    index: matchesTherefore.index
                }));
            }

            // https://www.sci.hokudai.ac.jp/~minobe/class/bad_eng_expressions.html
            const matchesBut = /But/g.exec(text);
            if (matchesBut) {
                report(node, new RuleError("The sentence begin with 'But' should not be used.", {
                    index: matchesBut.index
                }));
            }

            // https://www.sci.hokudai.ac.jp/~minobe/class/bad_eng_expressions.html
            const matchesAnd = /And/g.exec(text);
            if (matchesAnd) {
                report(node, new RuleError("The sentence begin with 'And' should not be used.", {
                    index: matchesAnd.index
                }));
            }

            // https://www.sci.hokudai.ac.jp/~minobe/class/bad_eng_expressions.html
            const matchesGenerally = /Generally/g.exec(text);
            if (matchesGenerally) {
                report(node, new RuleError("'Generally' at the beginning of a sentence should be replaced with 'In general,'.", {
                    index: matchesGenerally.index
                }));
            }

            // https://www.sci.hokudai.ac.jp/~minobe/class/bad_eng_expressions.html
            const matchesFirstly = /[Ff]irstly/g.exec(text);
            if (matchesFirstly) {
                report(node, new RuleError("The word 'firstly' would be better to replaced with 'first'.", {
                    index: matchesFirstly.index
                }));
            }

            // http://neutron.appl-beam.ibaraki.ac.jp/ohoyamak/Because.html#especially
            const matchesEspecially = /Especially/g.exec(text);
            if (matchesEspecially) {
                report(node, new RuleError("The word 'Especially' should be move to the middle of a sentence or replaced with 'In particular,'.", {
                    index: matchesEspecially.index
                }));
            }

            // http://neutron.appl-beam.ibaraki.ac.jp/ohoyamak/Because.html#especially
            const matchesParticularly = /Particularly/g.exec(text);
            if (matchesParticularly) {
                report(node, new RuleError("The word 'Particularly' should be move to the middle of a sentence or replaced with 'In particular,'.", {
                    index: matchesParticularly.index
                }));
            }

            // https://www.u-english.co.jp/reading/17.html
            const matchesItIsThought = /It\s*is\s*thought\s*that/g.exec(text);
            if (matchesItIsThought) {
                report(node, new RuleError("The sentence 'It is thought that' would not be better to use in a formal paper.", {
                    index: matchesItIsThought.index
                }));
            }

            // https://www.u-english.co.jp/reading/17.html
            const matchesItIsAssumed = /It\s*is\s*assumed\s*that/g.exec(text);
            if (matchesItIsAssumed) {
                report(node, new RuleError("The sentence 'It is assumed that' would not be better to use in a formal paper.", {
                    index: matchesItIsAssumed.index
                }));
            }

            // https://www.u-english.co.jp/reading/17.html
            const matchesSuppose = /suppose/g.exec(text);
            if (matchesSuppose) {
                report(node, new RuleError("The word 'suppose' would not be better to use in a formal paper. The word 'presume' or 'consider' would be better.", {
                    index: matchesSuppose.index
                }));
            }

            // https://www.u-english.co.jp/reading/17.html
            const matchesGuess = /guess/g.exec(text);
            if (matchesGuess) {
                report(node, new RuleError("The word 'guess' would not be better to use in a formal paper. The word 'presume' or 'consider' would be better.", {
                    index: matchesGuess.index
                }));
            }
        }
    }
};
