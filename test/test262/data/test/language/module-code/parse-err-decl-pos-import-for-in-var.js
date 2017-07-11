// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Statement cannot contain an `import` declaration
esid: sec-modules
negative:
  phase: early
  type: SyntaxError
flags: [module]
---*/

for (var y in [])
  import v from './decl-pos-import-for-in-var.js';