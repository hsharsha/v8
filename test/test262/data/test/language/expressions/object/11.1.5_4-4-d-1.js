// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.1.5_4-4-d-1
description: Object literal - No SyntaxError for duplicate property name (get,get)
---*/

  eval("({get foo(){}, get foo(){}});");
