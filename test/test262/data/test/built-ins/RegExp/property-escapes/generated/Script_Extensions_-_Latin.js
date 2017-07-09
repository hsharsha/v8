// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Latin`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0000AA,
    0x0000BA,
    0x0010FB,
    0x002071,
    0x00207F,
    0x0020F0,
    0x002132,
    0x00214E,
    0x00A92E
  ],
  ranges: [
    [0x000041, 0x00005A],
    [0x000061, 0x00007A],
    [0x0000C0, 0x0000D6],
    [0x0000D8, 0x0000F6],
    [0x0000F8, 0x0002B8],
    [0x0002E0, 0x0002E4],
    [0x000363, 0x00036F],
    [0x000485, 0x000486],
    [0x000951, 0x000952],
    [0x001D00, 0x001D25],
    [0x001D2C, 0x001D5C],
    [0x001D62, 0x001D65],
    [0x001D6B, 0x001D77],
    [0x001D79, 0x001DBE],
    [0x001E00, 0x001EFF],
    [0x002090, 0x00209C],
    [0x00212A, 0x00212B],
    [0x002160, 0x002188],
    [0x002C60, 0x002C7F],
    [0x00A722, 0x00A787],
    [0x00A78B, 0x00A7AE],
    [0x00A7B0, 0x00A7B7],
    [0x00A7F7, 0x00A7FF],
    [0x00AB30, 0x00AB5A],
    [0x00AB5C, 0x00AB64],
    [0x00FB00, 0x00FB06],
    [0x00FF21, 0x00FF3A],
    [0x00FF41, 0x00FF5A]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Latin}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Latin}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Latn}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Latn}"
);
testPropertyEscapes(
  /^\p{scx=Latin}+$/u,
  matchSymbols,
  "\\p{scx=Latin}"
);
testPropertyEscapes(
  /^\p{scx=Latn}+$/u,
  matchSymbols,
  "\\p{scx=Latn}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x0000D7,
    0x0000F7,
    0x001D78,
    0x00A7AF,
    0x00AB5B
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000040],
    [0x00005B, 0x000060],
    [0x00007B, 0x0000A9],
    [0x0000AB, 0x0000B9],
    [0x0000BB, 0x0000BF],
    [0x0002B9, 0x0002DF],
    [0x0002E5, 0x000362],
    [0x000370, 0x000484],
    [0x000487, 0x000950],
    [0x000953, 0x0010FA],
    [0x0010FC, 0x001CFF],
    [0x001D26, 0x001D2B],
    [0x001D5D, 0x001D61],
    [0x001D66, 0x001D6A],
    [0x001DBF, 0x001DFF],
    [0x001F00, 0x002070],
    [0x002072, 0x00207E],
    [0x002080, 0x00208F],
    [0x00209D, 0x0020EF],
    [0x0020F1, 0x002129],
    [0x00212C, 0x002131],
    [0x002133, 0x00214D],
    [0x00214F, 0x00215F],
    [0x002189, 0x002C5F],
    [0x002C80, 0x00A721],
    [0x00A788, 0x00A78A],
    [0x00A7B8, 0x00A7F6],
    [0x00A800, 0x00A92D],
    [0x00A92F, 0x00AB2F],
    [0x00AB65, 0x00DBFF],
    [0x00E000, 0x00FAFF],
    [0x00FB07, 0x00FF20],
    [0x00FF3B, 0x00FF40],
    [0x00FF5B, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Latin}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Latin}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Latn}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Latn}"
);
testPropertyEscapes(
  /^\P{scx=Latin}+$/u,
  nonMatchSymbols,
  "\\P{scx=Latin}"
);
testPropertyEscapes(
  /^\P{scx=Latn}+$/u,
  nonMatchSymbols,
  "\\P{scx=Latn}"
);
