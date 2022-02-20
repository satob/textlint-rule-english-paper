export default function (context, options = {}) {
    const { Syntax, RuleError, report, getSource } = context;
    return {
        [Syntax.Str](node) { // "Str" node
            const text = getSource(node); // Get text

            const matchesTherefore = /Therefore/g.exec(text);
            if (matchesTherefore) {
                const thereforeError = new RuleError("The word 'Therefore' would be better to place just after the subject.", {
                    index: matchesTherefore.index
                });
                report(node, thereforeError);
            }

            const matchesBut = /But/g.exec(text);
            if (matchesBut) {
                const butError = new RuleError("The sentence begin with 'But' should not be used.", {
                    index: matchesBut.index
                });
                report(node, butError);
            }

            const matchesAnd = /And/g.exec(text);
            if (matchesAnd) {
                const andError = new RuleError("The sentence begin with 'And' should not be used.", {
                    index: matchesAnd.index
                });
                report(node, andError);
            }

            // http://neutron.appl-beam.ibaraki.ac.jp/ohoyamak/Because.html#especially
            const matchesEespecially = /Especially/g.exec(text);
            if (matchesEespecially) {
                const especiallyError = new RuleError("The word 'Especially' would be better to use in the middle of a sentence.", {
                    index: matchesEespecially.index
                });
                report(node, especiallyError);
            }

            // http://neutron.appl-beam.ibaraki.ac.jp/ohoyamak/Because.html#especially
            const matchesParticularly = /Particularly/g.exec(text);
            if (matchesParticularly) {
                const particularlyError = new RuleError("The word 'Particularly' would be better to use in the middle of a sentence.", {
                    index: matchesParticularly.index
                });
                report(node, particularlyError);
            }

            // https://www.u-english.co.jp/reading/17.html
            const matchesSuppose = /suppose/g.exec(text);
            if (matchesSuppose) {
                const supposeError = new RuleError("The word 'suppose' would not be better to use in a formal paper. The word 'presume' or 'consider' would be better.", {
                    index: matchesSuppose.index
                });
                report(node, supposeError);
            }

            // https://www.u-english.co.jp/reading/17.html
            const matchesGuess = /guess/g.exec(text);
            if (matchesGuess) {
                const guessError = new RuleError("The word 'guess' would not be better to use in a formal paper. The word 'presume' or 'consider' would be better.", {
                    index: matchesGuess.index
                });
                report(node, guessError);
            }
        }
    }
};
