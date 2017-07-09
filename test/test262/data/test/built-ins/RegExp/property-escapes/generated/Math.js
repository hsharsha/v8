// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Math`
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
    0x00002B,
    0x00005E,
    0x00007C,
    0x00007E,
    0x0000AC,
    0x0000B1,
    0x0000D7,
    0x0000F7,
    0x0003D5,
    0x002016,
    0x002040,
    0x002044,
    0x002052,
    0x0020E1,
    0x002102,
    0x002107,
    0x002115,
    0x002124,
    0x00214B,
    0x0021DD,
    0x00237C,
    0x0023B7,
    0x0023D0,
    0x0025E2,
    0x0025E4,
    0x002640,
    0x002642,
    0x00FB29,
    0x00FE68,
    0x00FF0B,
    0x00FF3C,
    0x00FF3E,
    0x00FF5C,
    0x00FF5E,
    0x00FFE2,
    0x01D4A2,
    0x01D4BB,
    0x01D546,
    0x01EE24,
    0x01EE27,
    0x01EE39,
    0x01EE3B,
    0x01EE42,
    0x01EE47,
    0x01EE49,
    0x01EE4B,
    0x01EE54,
    0x01EE57,
    0x01EE59,
    0x01EE5B,
    0x01EE5D,
    0x01EE5F,
    0x01EE64,
    0x01EE7E
  ],
  ranges: [
    [0x00003C, 0x00003E],
    [0x0003D0, 0x0003D2],
    [0x0003F0, 0x0003F1],
    [0x0003F4, 0x0003F6],
    [0x000606, 0x000608],
    [0x002032, 0x002034],
    [0x002061, 0x002064],
    [0x00207A, 0x00207E],
    [0x00208A, 0x00208E],
    [0x0020D0, 0x0020DC],
    [0x0020E5, 0x0020E6],
    [0x0020EB, 0x0020EF],
    [0x00210A, 0x002113],
    [0x002118, 0x00211D],
    [0x002128, 0x002129],
    [0x00212C, 0x00212D],
    [0x00212F, 0x002131],
    [0x002133, 0x002138],
    [0x00213C, 0x002149],
    [0x002190, 0x0021A7],
    [0x0021A9, 0x0021AE],
    [0x0021B0, 0x0021B1],
    [0x0021B6, 0x0021B7],
    [0x0021BC, 0x0021DB],
    [0x0021E4, 0x0021E5],
    [0x0021F4, 0x0022FF],
    [0x002308, 0x00230B],
    [0x002320, 0x002321],
    [0x00239B, 0x0023B5],
    [0x0023DC, 0x0023E2],
    [0x0025A0, 0x0025A1],
    [0x0025AE, 0x0025B7],
    [0x0025BC, 0x0025C1],
    [0x0025C6, 0x0025C7],
    [0x0025CA, 0x0025CB],
    [0x0025CF, 0x0025D3],
    [0x0025E7, 0x0025EC],
    [0x0025F8, 0x0025FF],
    [0x002605, 0x002606],
    [0x002660, 0x002663],
    [0x00266D, 0x00266F],
    [0x0027C0, 0x0027FF],
    [0x002900, 0x002AFF],
    [0x002B30, 0x002B44],
    [0x002B47, 0x002B4C],
    [0x00FE61, 0x00FE66],
    [0x00FF1C, 0x00FF1E],
    [0x00FFE9, 0x00FFEC],
    [0x01D400, 0x01D454],
    [0x01D456, 0x01D49C],
    [0x01D49E, 0x01D49F],
    [0x01D4A5, 0x01D4A6],
    [0x01D4A9, 0x01D4AC],
    [0x01D4AE, 0x01D4B9],
    [0x01D4BD, 0x01D4C3],
    [0x01D4C5, 0x01D505],
    [0x01D507, 0x01D50A],
    [0x01D50D, 0x01D514],
    [0x01D516, 0x01D51C],
    [0x01D51E, 0x01D539],
    [0x01D53B, 0x01D53E],
    [0x01D540, 0x01D544],
    [0x01D54A, 0x01D550],
    [0x01D552, 0x01D6A5],
    [0x01D6A8, 0x01D7CB],
    [0x01D7CE, 0x01D7FF],
    [0x01EE00, 0x01EE03],
    [0x01EE05, 0x01EE1F],
    [0x01EE21, 0x01EE22],
    [0x01EE29, 0x01EE32],
    [0x01EE34, 0x01EE37],
    [0x01EE4D, 0x01EE4F],
    [0x01EE51, 0x01EE52],
    [0x01EE61, 0x01EE62],
    [0x01EE67, 0x01EE6A],
    [0x01EE6C, 0x01EE72],
    [0x01EE74, 0x01EE77],
    [0x01EE79, 0x01EE7C],
    [0x01EE80, 0x01EE89],
    [0x01EE8B, 0x01EE9B],
    [0x01EEA1, 0x01EEA3],
    [0x01EEA5, 0x01EEA9],
    [0x01EEAB, 0x01EEBB],
    [0x01EEF0, 0x01EEF1]
  ]
});
testPropertyEscapes(
  /^\p{Math}+$/u,
  matchSymbols,
  "\\p{Math}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x00007D,
    0x002114,
    0x00212E,
    0x002132,
    0x00214A,
    0x0021A8,
    0x0021AF,
    0x0021DC,
    0x0023B6,
    0x0025E3,
    0x002641,
    0x00FE67,
    0x00FF3D,
    0x00FF5D,
    0x01D455,
    0x01D49D,
    0x01D4AD,
    0x01D4BA,
    0x01D4BC,
    0x01D4C4,
    0x01D506,
    0x01D515,
    0x01D51D,
    0x01D53A,
    0x01D53F,
    0x01D545,
    0x01D551,
    0x01EE04,
    0x01EE20,
    0x01EE23,
    0x01EE28,
    0x01EE33,
    0x01EE38,
    0x01EE3A,
    0x01EE48,
    0x01EE4A,
    0x01EE4C,
    0x01EE50,
    0x01EE53,
    0x01EE58,
    0x01EE5A,
    0x01EE5C,
    0x01EE5E,
    0x01EE60,
    0x01EE63,
    0x01EE6B,
    0x01EE73,
    0x01EE78,
    0x01EE7D,
    0x01EE7F,
    0x01EE8A,
    0x01EEA4,
    0x01EEAA
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00002A],
    [0x00002C, 0x00003B],
    [0x00003F, 0x00005D],
    [0x00005F, 0x00007B],
    [0x00007F, 0x0000AB],
    [0x0000AD, 0x0000B0],
    [0x0000B2, 0x0000D6],
    [0x0000D8, 0x0000F6],
    [0x0000F8, 0x0003CF],
    [0x0003D3, 0x0003D4],
    [0x0003D6, 0x0003EF],
    [0x0003F2, 0x0003F3],
    [0x0003F7, 0x000605],
    [0x000609, 0x002015],
    [0x002017, 0x002031],
    [0x002035, 0x00203F],
    [0x002041, 0x002043],
    [0x002045, 0x002051],
    [0x002053, 0x002060],
    [0x002065, 0x002079],
    [0x00207F, 0x002089],
    [0x00208F, 0x0020CF],
    [0x0020DD, 0x0020E0],
    [0x0020E2, 0x0020E4],
    [0x0020E7, 0x0020EA],
    [0x0020F0, 0x002101],
    [0x002103, 0x002106],
    [0x002108, 0x002109],
    [0x002116, 0x002117],
    [0x00211E, 0x002123],
    [0x002125, 0x002127],
    [0x00212A, 0x00212B],
    [0x002139, 0x00213B],
    [0x00214C, 0x00218F],
    [0x0021B2, 0x0021B5],
    [0x0021B8, 0x0021BB],
    [0x0021DE, 0x0021E3],
    [0x0021E6, 0x0021F3],
    [0x002300, 0x002307],
    [0x00230C, 0x00231F],
    [0x002322, 0x00237B],
    [0x00237D, 0x00239A],
    [0x0023B8, 0x0023CF],
    [0x0023D1, 0x0023DB],
    [0x0023E3, 0x00259F],
    [0x0025A2, 0x0025AD],
    [0x0025B8, 0x0025BB],
    [0x0025C2, 0x0025C5],
    [0x0025C8, 0x0025C9],
    [0x0025CC, 0x0025CE],
    [0x0025D4, 0x0025E1],
    [0x0025E5, 0x0025E6],
    [0x0025ED, 0x0025F7],
    [0x002600, 0x002604],
    [0x002607, 0x00263F],
    [0x002643, 0x00265F],
    [0x002664, 0x00266C],
    [0x002670, 0x0027BF],
    [0x002800, 0x0028FF],
    [0x002B00, 0x002B2F],
    [0x002B45, 0x002B46],
    [0x002B4D, 0x00DBFF],
    [0x00E000, 0x00FB28],
    [0x00FB2A, 0x00FE60],
    [0x00FE69, 0x00FF0A],
    [0x00FF0C, 0x00FF1B],
    [0x00FF1F, 0x00FF3B],
    [0x00FF3F, 0x00FF5B],
    [0x00FF5F, 0x00FFE1],
    [0x00FFE3, 0x00FFE8],
    [0x00FFED, 0x01D3FF],
    [0x01D4A0, 0x01D4A1],
    [0x01D4A3, 0x01D4A4],
    [0x01D4A7, 0x01D4A8],
    [0x01D50B, 0x01D50C],
    [0x01D547, 0x01D549],
    [0x01D6A6, 0x01D6A7],
    [0x01D7CC, 0x01D7CD],
    [0x01D800, 0x01EDFF],
    [0x01EE25, 0x01EE26],
    [0x01EE3C, 0x01EE41],
    [0x01EE43, 0x01EE46],
    [0x01EE55, 0x01EE56],
    [0x01EE65, 0x01EE66],
    [0x01EE9C, 0x01EEA0],
    [0x01EEBC, 0x01EEEF],
    [0x01EEF2, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Math}+$/u,
  nonMatchSymbols,
  "\\P{Math}"
);
