// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Sinhala`
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
    0x000DBD,
    0x000DCA,
    0x000DD6
  ],
  ranges: [
    [0x000D82, 0x000D83],
    [0x000D85, 0x000D96],
    [0x000D9A, 0x000DB1],
    [0x000DB3, 0x000DBB],
    [0x000DC0, 0x000DC6],
    [0x000DCF, 0x000DD4],
    [0x000DD8, 0x000DDF],
    [0x000DE6, 0x000DEF],
    [0x000DF2, 0x000DF4],
    [0x0111E1, 0x0111F4]
  ]
});
testPropertyEscapes(
  /^\p{Script=Sinhala}+$/u,
  matchSymbols,
  "\\p{Script=Sinhala}"
);
testPropertyEscapes(
  /^\p{Script=Sinh}+$/u,
  matchSymbols,
  "\\p{Script=Sinh}"
);
testPropertyEscapes(
  /^\p{sc=Sinhala}+$/u,
  matchSymbols,
  "\\p{sc=Sinhala}"
);
testPropertyEscapes(
  /^\p{sc=Sinh}+$/u,
  matchSymbols,
  "\\p{sc=Sinh}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x000D84,
    0x000DB2,
    0x000DBC,
    0x000DD5,
    0x000DD7
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000D81],
    [0x000D97, 0x000D99],
    [0x000DBE, 0x000DBF],
    [0x000DC7, 0x000DC9],
    [0x000DCB, 0x000DCE],
    [0x000DE0, 0x000DE5],
    [0x000DF0, 0x000DF1],
    [0x000DF5, 0x00DBFF],
    [0x00E000, 0x0111E0],
    [0x0111F5, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Sinhala}+$/u,
  nonMatchSymbols,
  "\\P{Script=Sinhala}"
);
testPropertyEscapes(
  /^\P{Script=Sinh}+$/u,
  nonMatchSymbols,
  "\\P{Script=Sinh}"
);
testPropertyEscapes(
  /^\P{sc=Sinhala}+$/u,
  nonMatchSymbols,
  "\\P{sc=Sinhala}"
);
testPropertyEscapes(
  /^\P{sc=Sinh}+$/u,
  nonMatchSymbols,
  "\\P{sc=Sinh}"
);
