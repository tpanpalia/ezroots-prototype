function xE(A, e) {
  for (var n = 0; n < e.length; n++) {
    const s = e[n];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const i in s)
        if (i !== "default" && !(i in A)) {
          const l = Object.getOwnPropertyDescriptor(s, i);
          l &&
            Object.defineProperty(
              A,
              i,
              l.get ? l : { enumerable: !0, get: () => s[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(A, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const r of l.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && s(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
function NE(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default")
    ? A.default
    : A;
}
var zo = { exports: {} },
  di = {},
  Xo = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var As = Symbol.for("react.element"),
  ZE = Symbol.for("react.portal"),
  GE = Symbol.for("react.fragment"),
  yE = Symbol.for("react.strict_mode"),
  vE = Symbol.for("react.profiler"),
  RE = Symbol.for("react.provider"),
  YE = Symbol.for("react.context"),
  bE = Symbol.for("react.forward_ref"),
  WE = Symbol.for("react.suspense"),
  UE = Symbol.for("react.memo"),
  FE = Symbol.for("react.lazy"),
  Ba = Symbol.iterator;
function TE(A) {
  return A === null || typeof A != "object"
    ? null
    : ((A = (Ba && A[Ba]) || A["@@iterator"]),
      typeof A == "function" ? A : null);
}
var Ho = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  qo = Object.assign,
  $o = {};
function sn(A, e, n) {
  ((this.props = A),
    (this.context = e),
    (this.refs = $o),
    (this.updater = n || Ho));
}
sn.prototype.isReactComponent = {};
sn.prototype.setState = function (A, e) {
  if (typeof A != "object" && typeof A != "function" && A != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, A, e, "setState");
};
sn.prototype.forceUpdate = function (A) {
  this.updater.enqueueForceUpdate(this, A, "forceUpdate");
};
function _o() {}
_o.prototype = sn.prototype;
function dr(A, e, n) {
  ((this.props = A),
    (this.context = e),
    (this.refs = $o),
    (this.updater = n || Ho));
}
var ur = (dr.prototype = new _o());
ur.constructor = dr;
qo(ur, sn.prototype);
ur.isPureReactComponent = !0;
var Qa = Array.isArray,
  Ag = Object.prototype.hasOwnProperty,
  hr = { current: null },
  eg = { key: !0, ref: !0, __self: !0, __source: !0 };
function tg(A, e, n) {
  var s,
    i = {},
    l = null,
    r = null;
  if (e != null)
    for (s in (e.ref !== void 0 && (r = e.ref),
    e.key !== void 0 && (l = "" + e.key),
    e))
      Ag.call(e, s) && !eg.hasOwnProperty(s) && (i[s] = e[s]);
  var o = arguments.length - 2;
  if (o === 1) i.children = n;
  else if (1 < o) {
    for (var a = Array(o), g = 0; g < o; g++) a[g] = arguments[g + 2];
    i.children = a;
  }
  if (A && A.defaultProps)
    for (s in ((o = A.defaultProps), o)) i[s] === void 0 && (i[s] = o[s]);
  return {
    $$typeof: As,
    type: A,
    key: l,
    ref: r,
    props: i,
    _owner: hr.current,
  };
}
function VE(A, e) {
  return {
    $$typeof: As,
    type: A.type,
    key: e,
    ref: A.ref,
    props: A.props,
    _owner: A._owner,
  };
}
function Br(A) {
  return typeof A == "object" && A !== null && A.$$typeof === As;
}
function KE(A) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    A.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var wa = /\/+/g;
function Fi(A, e) {
  return typeof A == "object" && A !== null && A.key != null
    ? KE("" + A.key)
    : e.toString(36);
}
function fs(A, e, n, s, i) {
  var l = typeof A;
  (l === "undefined" || l === "boolean") && (A = null);
  var r = !1;
  if (A === null) r = !0;
  else
    switch (l) {
      case "string":
      case "number":
        r = !0;
        break;
      case "object":
        switch (A.$$typeof) {
          case As:
          case ZE:
            r = !0;
        }
    }
  if (r)
    return (
      (r = A),
      (i = i(r)),
      (A = s === "" ? "." + Fi(r, 0) : s),
      Qa(i)
        ? ((n = ""),
          A != null && (n = A.replace(wa, "$&/") + "/"),
          fs(i, e, n, "", function (g) {
            return g;
          }))
        : i != null &&
          (Br(i) &&
            (i = VE(
              i,
              n +
                (!i.key || (r && r.key === i.key)
                  ? ""
                  : ("" + i.key).replace(wa, "$&/") + "/") +
                A,
            )),
          e.push(i)),
      1
    );
  if (((r = 0), (s = s === "" ? "." : s + ":"), Qa(A)))
    for (var o = 0; o < A.length; o++) {
      l = A[o];
      var a = s + Fi(l, o);
      r += fs(l, e, n, a, i);
    }
  else if (((a = TE(A)), typeof a == "function"))
    for (A = a.call(A), o = 0; !(l = A.next()).done;)
      ((l = l.value), (a = s + Fi(l, o++)), (r += fs(l, e, n, a, i)));
  else if (l === "object")
    throw (
      (e = String(A)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(A).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return r;
}
function os(A, e, n) {
  if (A == null) return A;
  var s = [],
    i = 0;
  return (
    fs(A, s, "", "", function (l) {
      return e.call(n, l, i++);
    }),
    s
  );
}
function LE(A) {
  if (A._status === -1) {
    var e = A._result;
    ((e = e()),
      e.then(
        function (n) {
          (A._status === 0 || A._status === -1) &&
            ((A._status = 1), (A._result = n));
        },
        function (n) {
          (A._status === 0 || A._status === -1) &&
            ((A._status = 2), (A._result = n));
        },
      ),
      A._status === -1 && ((A._status = 0), (A._result = e)));
  }
  if (A._status === 1) return A._result.default;
  throw A._result;
}
var NA = { current: null },
  Js = { transition: null },
  PE = {
    ReactCurrentDispatcher: NA,
    ReactCurrentBatchConfig: Js,
    ReactCurrentOwner: hr,
  };
function ng() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = {
  map: os,
  forEach: function (A, e, n) {
    os(
      A,
      function () {
        e.apply(this, arguments);
      },
      n,
    );
  },
  count: function (A) {
    var e = 0;
    return (
      os(A, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (A) {
    return (
      os(A, function (e) {
        return e;
      }) || []
    );
  },
  only: function (A) {
    if (!Br(A))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return A;
  },
};
T.Component = sn;
T.Fragment = GE;
T.Profiler = vE;
T.PureComponent = dr;
T.StrictMode = yE;
T.Suspense = WE;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = PE;
T.act = ng;
T.cloneElement = function (A, e, n) {
  if (A == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        A +
        ".",
    );
  var s = qo({}, A.props),
    i = A.key,
    l = A.ref,
    r = A._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((l = e.ref), (r = hr.current)),
      e.key !== void 0 && (i = "" + e.key),
      A.type && A.type.defaultProps)
    )
      var o = A.type.defaultProps;
    for (a in e)
      Ag.call(e, a) &&
        !eg.hasOwnProperty(a) &&
        (s[a] = e[a] === void 0 && o !== void 0 ? o[a] : e[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    o = Array(a);
    for (var g = 0; g < a; g++) o[g] = arguments[g + 2];
    s.children = o;
  }
  return { $$typeof: As, type: A.type, key: i, ref: l, props: s, _owner: r };
};
T.createContext = function (A) {
  return (
    (A = {
      $$typeof: YE,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (A.Provider = { $$typeof: RE, _context: A }),
    (A.Consumer = A)
  );
};
T.createElement = tg;
T.createFactory = function (A) {
  var e = tg.bind(null, A);
  return ((e.type = A), e);
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (A) {
  return { $$typeof: bE, render: A };
};
T.isValidElement = Br;
T.lazy = function (A) {
  return { $$typeof: FE, _payload: { _status: -1, _result: A }, _init: LE };
};
T.memo = function (A, e) {
  return { $$typeof: UE, type: A, compare: e === void 0 ? null : e };
};
T.startTransition = function (A) {
  var e = Js.transition;
  Js.transition = {};
  try {
    A();
  } finally {
    Js.transition = e;
  }
};
T.unstable_act = ng;
T.useCallback = function (A, e) {
  return NA.current.useCallback(A, e);
};
T.useContext = function (A) {
  return NA.current.useContext(A);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (A) {
  return NA.current.useDeferredValue(A);
};
T.useEffect = function (A, e) {
  return NA.current.useEffect(A, e);
};
T.useId = function () {
  return NA.current.useId();
};
T.useImperativeHandle = function (A, e, n) {
  return NA.current.useImperativeHandle(A, e, n);
};
T.useInsertionEffect = function (A, e) {
  return NA.current.useInsertionEffect(A, e);
};
T.useLayoutEffect = function (A, e) {
  return NA.current.useLayoutEffect(A, e);
};
T.useMemo = function (A, e) {
  return NA.current.useMemo(A, e);
};
T.useReducer = function (A, e, n) {
  return NA.current.useReducer(A, e, n);
};
T.useRef = function (A) {
  return NA.current.useRef(A);
};
T.useState = function (A) {
  return NA.current.useState(A);
};
T.useSyncExternalStore = function (A, e, n) {
  return NA.current.useSyncExternalStore(A, e, n);
};
T.useTransition = function () {
  return NA.current.useTransition();
};
T.version = "18.3.1";
Xo.exports = T;
var B = Xo.exports;
const OE = NE(B),
  zE = xE({ __proto__: null, default: OE }, [B]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var XE = B,
  HE = Symbol.for("react.element"),
  qE = Symbol.for("react.fragment"),
  $E = Object.prototype.hasOwnProperty,
  _E = XE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  AC = { key: !0, ref: !0, __self: !0, __source: !0 };
function sg(A, e, n) {
  var s,
    i = {},
    l = null,
    r = null;
  (n !== void 0 && (l = "" + n),
    e.key !== void 0 && (l = "" + e.key),
    e.ref !== void 0 && (r = e.ref));
  for (s in e) $E.call(e, s) && !AC.hasOwnProperty(s) && (i[s] = e[s]);
  if (A && A.defaultProps)
    for (s in ((e = A.defaultProps), e)) i[s] === void 0 && (i[s] = e[s]);
  return {
    $$typeof: HE,
    type: A,
    key: l,
    ref: r,
    props: i,
    _owner: _E.current,
  };
}
di.Fragment = qE;
di.jsx = sg;
di.jsxs = sg;
zo.exports = di;
var t = zo.exports,
  ig = { exports: {} },
  VA = {},
  lg = { exports: {} },
  rg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (A) {
  function e(y, Z) {
    var Y = y.length;
    y.push(Z);
    A: for (; 0 < Y;) {
      var L = (Y - 1) >>> 1,
        cA = y[L];
      if (0 < i(cA, Z)) ((y[L] = Z), (y[Y] = cA), (Y = L));
      else break A;
    }
  }
  function n(y) {
    return y.length === 0 ? null : y[0];
  }
  function s(y) {
    if (y.length === 0) return null;
    var Z = y[0],
      Y = y.pop();
    if (Y !== Z) {
      y[0] = Y;
      A: for (var L = 0, cA = y.length, rs = cA >>> 1; L < rs;) {
        var st = 2 * (L + 1) - 1,
          Ui = y[st],
          it = st + 1,
          as = y[it];
        if (0 > i(Ui, Y))
          it < cA && 0 > i(as, Ui)
            ? ((y[L] = as), (y[it] = Y), (L = it))
            : ((y[L] = Ui), (y[st] = Y), (L = st));
        else if (it < cA && 0 > i(as, Y)) ((y[L] = as), (y[it] = Y), (L = it));
        else break A;
      }
    }
    return Z;
  }
  function i(y, Z) {
    var Y = y.sortIndex - Z.sortIndex;
    return Y !== 0 ? Y : y.id - Z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    A.unstable_now = function () {
      return l.now();
    };
  } else {
    var r = Date,
      o = r.now();
    A.unstable_now = function () {
      return r.now() - o;
    };
  }
  var a = [],
    g = [],
    C = 1,
    E = null,
    c = 3,
    m = !1,
    u = !1,
    Q = !1,
    h = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    I = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(y) {
    for (var Z = n(g); Z !== null;) {
      if (Z.callback === null) s(g);
      else if (Z.startTime <= y)
        (s(g), (Z.sortIndex = Z.expirationTime), e(a, Z));
      else break;
      Z = n(g);
    }
  }
  function D(y) {
    if (((Q = !1), w(y), !u))
      if (n(a) !== null) ((u = !0), xe(j));
      else {
        var Z = n(g);
        Z !== null && LA(D, Z.startTime - y);
      }
  }
  function j(y, Z) {
    ((u = !1), Q && ((Q = !1), d(p), (p = -1)), (m = !0));
    var Y = c;
    try {
      for (
        w(Z), E = n(a);
        E !== null && (!(E.expirationTime > Z) || (y && !eA()));
      ) {
        var L = E.callback;
        if (typeof L == "function") {
          ((E.callback = null), (c = E.priorityLevel));
          var cA = L(E.expirationTime <= Z);
          ((Z = A.unstable_now()),
            typeof cA == "function" ? (E.callback = cA) : E === n(a) && s(a),
            w(Z));
        } else s(a);
        E = n(a);
      }
      if (E !== null) var rs = !0;
      else {
        var st = n(g);
        (st !== null && LA(D, st.startTime - Z), (rs = !1));
      }
      return rs;
    } finally {
      ((E = null), (c = Y), (m = !1));
    }
  }
  var J = !1,
    M = null,
    p = -1,
    k = 5,
    x = -1;
  function eA() {
    return !(A.unstable_now() - x < k);
  }
  function aA() {
    if (M !== null) {
      var y = A.unstable_now();
      x = y;
      var Z = !0;
      try {
        Z = M(!0, y);
      } finally {
        Z ? U() : ((J = !1), (M = null));
      }
    } else J = !1;
  }
  var U;
  if (typeof I == "function")
    U = function () {
      I(aA);
    };
  else if (typeof MessageChannel < "u") {
    var $A = new MessageChannel(),
      re = $A.port2;
    (($A.port1.onmessage = aA),
      (U = function () {
        re.postMessage(null);
      }));
  } else
    U = function () {
      h(aA, 0);
    };
  function xe(y) {
    ((M = y), J || ((J = !0), U()));
  }
  function LA(y, Z) {
    p = h(function () {
      y(A.unstable_now());
    }, Z);
  }
  ((A.unstable_IdlePriority = 5),
    (A.unstable_ImmediatePriority = 1),
    (A.unstable_LowPriority = 4),
    (A.unstable_NormalPriority = 3),
    (A.unstable_Profiling = null),
    (A.unstable_UserBlockingPriority = 2),
    (A.unstable_cancelCallback = function (y) {
      y.callback = null;
    }),
    (A.unstable_continueExecution = function () {
      u || m || ((u = !0), xe(j));
    }),
    (A.unstable_forceFrameRate = function (y) {
      0 > y || 125 < y
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (k = 0 < y ? Math.floor(1e3 / y) : 5);
    }),
    (A.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (A.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (A.unstable_next = function (y) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = c;
      }
      var Y = c;
      c = Z;
      try {
        return y();
      } finally {
        c = Y;
      }
    }),
    (A.unstable_pauseExecution = function () {}),
    (A.unstable_requestPaint = function () {}),
    (A.unstable_runWithPriority = function (y, Z) {
      switch (y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          y = 3;
      }
      var Y = c;
      c = y;
      try {
        return Z();
      } finally {
        c = Y;
      }
    }),
    (A.unstable_scheduleCallback = function (y, Z, Y) {
      var L = A.unstable_now();
      switch (
        (typeof Y == "object" && Y !== null
          ? ((Y = Y.delay), (Y = typeof Y == "number" && 0 < Y ? L + Y : L))
          : (Y = L),
        y)
      ) {
        case 1:
          var cA = -1;
          break;
        case 2:
          cA = 250;
          break;
        case 5:
          cA = 1073741823;
          break;
        case 4:
          cA = 1e4;
          break;
        default:
          cA = 5e3;
      }
      return (
        (cA = Y + cA),
        (y = {
          id: C++,
          callback: Z,
          priorityLevel: y,
          startTime: Y,
          expirationTime: cA,
          sortIndex: -1,
        }),
        Y > L
          ? ((y.sortIndex = Y),
            e(g, y),
            n(a) === null &&
              y === n(g) &&
              (Q ? (d(p), (p = -1)) : (Q = !0), LA(D, Y - L)))
          : ((y.sortIndex = cA), e(a, y), u || m || ((u = !0), xe(j))),
        y
      );
    }),
    (A.unstable_shouldYield = eA),
    (A.unstable_wrapCallback = function (y) {
      var Z = c;
      return function () {
        var Y = c;
        c = Z;
        try {
          return y.apply(this, arguments);
        } finally {
          c = Y;
        }
      };
    }));
})(rg);
lg.exports = rg;
var eC = lg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tC = B,
  FA = eC;
function f(A) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + A, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    A +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ag = new Set(),
  yn = {};
function wt(A, e) {
  (zt(A, e), zt(A + "Capture", e));
}
function zt(A, e) {
  for (yn[A] = e, A = 0; A < e.length; A++) ag.add(e[A]);
}
var we = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ul = Object.prototype.hasOwnProperty,
  nC =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ma = {},
  Da = {};
function sC(A) {
  return ul.call(Da, A)
    ? !0
    : ul.call(ma, A)
      ? !1
      : nC.test(A)
        ? (Da[A] = !0)
        : ((ma[A] = !0), !1);
}
function iC(A, e, n, s) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return s
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((A = A.toLowerCase().slice(0, 5)), A !== "data-" && A !== "aria-");
    default:
      return !1;
  }
}
function lC(A, e, n, s) {
  if (e === null || typeof e > "u" || iC(A, e, n, s)) return !0;
  if (s) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function ZA(A, e, n, s, i, l, r) {
  ((this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = s),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = A),
    (this.type = e),
    (this.sanitizeURL = l),
    (this.removeEmptyString = r));
}
var mA = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (A) {
    mA[A] = new ZA(A, 0, !1, A, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (A) {
  var e = A[0];
  mA[e] = new ZA(e, 1, !1, A[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (A) {
  mA[A] = new ZA(A, 2, !1, A.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (A) {
  mA[A] = new ZA(A, 2, !1, A, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (A) {
    mA[A] = new ZA(A, 3, !1, A.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (A) {
  mA[A] = new ZA(A, 3, !0, A, null, !1, !1);
});
["capture", "download"].forEach(function (A) {
  mA[A] = new ZA(A, 4, !1, A, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (A) {
  mA[A] = new ZA(A, 6, !1, A, null, !1, !1);
});
["rowSpan", "start"].forEach(function (A) {
  mA[A] = new ZA(A, 5, !1, A.toLowerCase(), null, !1, !1);
});
var Qr = /[\-:]([a-z])/g;
function wr(A) {
  return A[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (A) {
    var e = A.replace(Qr, wr);
    mA[e] = new ZA(e, 1, !1, A, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (A) {
    var e = A.replace(Qr, wr);
    mA[e] = new ZA(e, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (A) {
  var e = A.replace(Qr, wr);
  mA[e] = new ZA(e, 1, !1, A, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (A) {
  mA[A] = new ZA(A, 1, !1, A.toLowerCase(), null, !1, !1);
});
mA.xlinkHref = new ZA(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (A) {
  mA[A] = new ZA(A, 1, !1, A.toLowerCase(), null, !0, !0);
});
function mr(A, e, n, s) {
  var i = mA.hasOwnProperty(e) ? mA[e] : null;
  (i !== null
    ? i.type !== 0
    : s ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (lC(e, n, i, s) && (n = null),
    s || i === null
      ? sC(e) && (n === null ? A.removeAttribute(e) : A.setAttribute(e, "" + n))
      : i.mustUseProperty
        ? (A[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((e = i.attributeName),
          (s = i.attributeNamespace),
          n === null
            ? A.removeAttribute(e)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              s ? A.setAttributeNS(s, e, n) : A.setAttribute(e, n))));
}
var Se = tC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gs = Symbol.for("react.element"),
  Jt = Symbol.for("react.portal"),
  xt = Symbol.for("react.fragment"),
  Dr = Symbol.for("react.strict_mode"),
  hl = Symbol.for("react.profiler"),
  og = Symbol.for("react.provider"),
  gg = Symbol.for("react.context"),
  Mr = Symbol.for("react.forward_ref"),
  Bl = Symbol.for("react.suspense"),
  Ql = Symbol.for("react.suspense_list"),
  jr = Symbol.for("react.memo"),
  Ze = Symbol.for("react.lazy"),
  cg = Symbol.for("react.offscreen"),
  Ma = Symbol.iterator;
function cn(A) {
  return A === null || typeof A != "object"
    ? null
    : ((A = (Ma && A[Ma]) || A["@@iterator"]),
      typeof A == "function" ? A : null);
}
var lA = Object.assign,
  Ti;
function wn(A) {
  if (Ti === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Ti = (e && e[1]) || "";
    }
  return (
    `
` +
    Ti +
    A
  );
}
var Vi = !1;
function Ki(A, e) {
  if (!A || Vi) return "";
  Vi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (g) {
          var s = g;
        }
        Reflect.construct(A, [], e);
      } else {
        try {
          e.call();
        } catch (g) {
          s = g;
        }
        A.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (g) {
        s = g;
      }
      A();
    }
  } catch (g) {
    if (g && s && typeof g.stack == "string") {
      for (
        var i = g.stack.split(`
`),
          l = s.stack.split(`
`),
          r = i.length - 1,
          o = l.length - 1;
        1 <= r && 0 <= o && i[r] !== l[o];
      )
        o--;
      for (; 1 <= r && 0 <= o; r--, o--)
        if (i[r] !== l[o]) {
          if (r !== 1 || o !== 1)
            do
              if ((r--, o--, 0 > o || i[r] !== l[o])) {
                var a =
                  `
` + i[r].replace(" at new ", " at ");
                return (
                  A.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", A.displayName)),
                  a
                );
              }
            while (1 <= r && 0 <= o);
          break;
        }
    }
  } finally {
    ((Vi = !1), (Error.prepareStackTrace = n));
  }
  return (A = A ? A.displayName || A.name : "") ? wn(A) : "";
}
function rC(A) {
  switch (A.tag) {
    case 5:
      return wn(A.type);
    case 16:
      return wn("Lazy");
    case 13:
      return wn("Suspense");
    case 19:
      return wn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((A = Ki(A.type, !1)), A);
    case 11:
      return ((A = Ki(A.type.render, !1)), A);
    case 1:
      return ((A = Ki(A.type, !0)), A);
    default:
      return "";
  }
}
function wl(A) {
  if (A == null) return null;
  if (typeof A == "function") return A.displayName || A.name || null;
  if (typeof A == "string") return A;
  switch (A) {
    case xt:
      return "Fragment";
    case Jt:
      return "Portal";
    case hl:
      return "Profiler";
    case Dr:
      return "StrictMode";
    case Bl:
      return "Suspense";
    case Ql:
      return "SuspenseList";
  }
  if (typeof A == "object")
    switch (A.$$typeof) {
      case gg:
        return (A.displayName || "Context") + ".Consumer";
      case og:
        return (A._context.displayName || "Context") + ".Provider";
      case Mr:
        var e = A.render;
        return (
          (A = A.displayName),
          A ||
            ((A = e.displayName || e.name || ""),
            (A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef")),
          A
        );
      case jr:
        return (
          (e = A.displayName || null),
          e !== null ? e : wl(A.type) || "Memo"
        );
      case Ze:
        ((e = A._payload), (A = A._init));
        try {
          return wl(A(e));
        } catch {}
    }
  return null;
}
function aC(A) {
  var e = A.type;
  switch (A.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (A = e.render),
        (A = A.displayName || A.name || ""),
        e.displayName || (A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return wl(e);
    case 8:
      return e === Dr ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function Xe(A) {
  switch (typeof A) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return A;
    case "object":
      return A;
    default:
      return "";
  }
}
function Eg(A) {
  var e = A.type;
  return (
    (A = A.nodeName) &&
    A.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function oC(A) {
  var e = Eg(A) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(A.constructor.prototype, e),
    s = "" + A[e];
  if (
    !A.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(A, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (r) {
          ((s = "" + r), l.call(this, r));
        },
      }),
      Object.defineProperty(A, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return s;
        },
        setValue: function (r) {
          s = "" + r;
        },
        stopTracking: function () {
          ((A._valueTracker = null), delete A[e]);
        },
      }
    );
  }
}
function cs(A) {
  A._valueTracker || (A._valueTracker = oC(A));
}
function Cg(A) {
  if (!A) return !1;
  var e = A._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    s = "";
  return (
    A && (s = Eg(A) ? (A.checked ? "true" : "false") : A.value),
    (A = s),
    A !== n ? (e.setValue(A), !0) : !1
  );
}
function Us(A) {
  if (((A = A || (typeof document < "u" ? document : void 0)), typeof A > "u"))
    return null;
  try {
    return A.activeElement || A.body;
  } catch {
    return A.body;
  }
}
function ml(A, e) {
  var n = e.checked;
  return lA({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? A._wrapperState.initialChecked,
  });
}
function ja(A, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    s = e.checked != null ? e.checked : e.defaultChecked;
  ((n = Xe(e.value != null ? e.value : n)),
    (A._wrapperState = {
      initialChecked: s,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    }));
}
function Ig(A, e) {
  ((e = e.checked), e != null && mr(A, "checked", e, !1));
}
function Dl(A, e) {
  Ig(A, e);
  var n = Xe(e.value),
    s = e.type;
  if (n != null)
    s === "number"
      ? ((n === 0 && A.value === "") || A.value != n) && (A.value = "" + n)
      : A.value !== "" + n && (A.value = "" + n);
  else if (s === "submit" || s === "reset") {
    A.removeAttribute("value");
    return;
  }
  (e.hasOwnProperty("value")
    ? Ml(A, e.type, n)
    : e.hasOwnProperty("defaultValue") && Ml(A, e.type, Xe(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (A.defaultChecked = !!e.defaultChecked));
}
function pa(A, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var s = e.type;
    if (!(
      (s !== "submit" && s !== "reset") ||
      (e.value !== void 0 && e.value !== null)
    ))
      return;
    ((e = "" + A._wrapperState.initialValue),
      n || e === A.value || (A.value = e),
      (A.defaultValue = e));
  }
  ((n = A.name),
    n !== "" && (A.name = ""),
    (A.defaultChecked = !!A._wrapperState.initialChecked),
    n !== "" && (A.name = n));
}
function Ml(A, e, n) {
  (e !== "number" || Us(A.ownerDocument) !== A) &&
    (n == null
      ? (A.defaultValue = "" + A._wrapperState.initialValue)
      : A.defaultValue !== "" + n && (A.defaultValue = "" + n));
}
var mn = Array.isArray;
function Ft(A, e, n, s) {
  if (((A = A.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
    for (n = 0; n < A.length; n++)
      ((i = e.hasOwnProperty("$" + A[n].value)),
        A[n].selected !== i && (A[n].selected = i),
        i && s && (A[n].defaultSelected = !0));
  } else {
    for (n = "" + Xe(n), e = null, i = 0; i < A.length; i++) {
      if (A[i].value === n) {
        ((A[i].selected = !0), s && (A[i].defaultSelected = !0));
        return;
      }
      e !== null || A[i].disabled || (e = A[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function jl(A, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(f(91));
  return lA({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + A._wrapperState.initialValue,
  });
}
function Sa(A, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(f(92));
      if (mn(n)) {
        if (1 < n.length) throw Error(f(93));
        n = n[0];
      }
      e = n;
    }
    (e == null && (e = ""), (n = e));
  }
  A._wrapperState = { initialValue: Xe(n) };
}
function dg(A, e) {
  var n = Xe(e.value),
    s = Xe(e.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== A.value && (A.value = n),
    e.defaultValue == null && A.defaultValue !== n && (A.defaultValue = n)),
    s != null && (A.defaultValue = "" + s));
}
function ka(A) {
  var e = A.textContent;
  e === A._wrapperState.initialValue && e !== "" && e !== null && (A.value = e);
}
function ug(A) {
  switch (A) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pl(A, e) {
  return A == null || A === "http://www.w3.org/1999/xhtml"
    ? ug(e)
    : A === "http://www.w3.org/2000/svg" && e === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : A;
}
var Es,
  hg = (function (A) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, s, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return A(e, n, s, i);
          });
        }
      : A;
  })(function (A, e) {
    if (A.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in A)
      A.innerHTML = e;
    else {
      for (
        Es = Es || document.createElement("div"),
          Es.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = Es.firstChild;
        A.firstChild;
      )
        A.removeChild(A.firstChild);
      for (; e.firstChild;) A.appendChild(e.firstChild);
    }
  });
function vn(A, e) {
  if (e) {
    var n = A.firstChild;
    if (n && n === A.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  A.textContent = e;
}
var jn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  gC = ["Webkit", "ms", "Moz", "O"];
Object.keys(jn).forEach(function (A) {
  gC.forEach(function (e) {
    ((e = e + A.charAt(0).toUpperCase() + A.substring(1)), (jn[e] = jn[A]));
  });
});
function Bg(A, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (jn.hasOwnProperty(A) && jn[A])
      ? ("" + e).trim()
      : e + "px";
}
function Qg(A, e) {
  A = A.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0,
        i = Bg(n, e[n], s);
      (n === "float" && (n = "cssFloat"), s ? A.setProperty(n, i) : (A[n] = i));
    }
}
var cC = lA(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Sl(A, e) {
  if (e) {
    if (cC[A] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(f(137, A));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(f(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(f(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(f(62));
  }
}
function kl(A, e) {
  if (A.indexOf("-") === -1) return typeof e.is == "string";
  switch (A) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var fl = null;
function pr(A) {
  return (
    (A = A.target || A.srcElement || window),
    A.correspondingUseElement && (A = A.correspondingUseElement),
    A.nodeType === 3 ? A.parentNode : A
  );
}
var Jl = null,
  Tt = null,
  Vt = null;
function fa(A) {
  if ((A = ns(A))) {
    if (typeof Jl != "function") throw Error(f(280));
    var e = A.stateNode;
    e && ((e = wi(e)), Jl(A.stateNode, A.type, e));
  }
}
function wg(A) {
  Tt ? (Vt ? Vt.push(A) : (Vt = [A])) : (Tt = A);
}
function mg() {
  if (Tt) {
    var A = Tt,
      e = Vt;
    if (((Vt = Tt = null), fa(A), e)) for (A = 0; A < e.length; A++) fa(e[A]);
  }
}
function Dg(A, e) {
  return A(e);
}
function Mg() {}
var Li = !1;
function jg(A, e, n) {
  if (Li) return A(e, n);
  Li = !0;
  try {
    return Dg(A, e, n);
  } finally {
    ((Li = !1), (Tt !== null || Vt !== null) && (Mg(), mg()));
  }
}
function Rn(A, e) {
  var n = A.stateNode;
  if (n === null) return null;
  var s = wi(n);
  if (s === null) return null;
  n = s[e];
  A: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((s = !s.disabled) ||
        ((A = A.type),
        (s = !(
          A === "button" ||
          A === "input" ||
          A === "select" ||
          A === "textarea"
        ))),
        (A = !s));
      break A;
    default:
      A = !1;
  }
  if (A) return null;
  if (n && typeof n != "function") throw Error(f(231, e, typeof n));
  return n;
}
var xl = !1;
if (we)
  try {
    var En = {};
    (Object.defineProperty(En, "passive", {
      get: function () {
        xl = !0;
      },
    }),
      window.addEventListener("test", En, En),
      window.removeEventListener("test", En, En));
  } catch {
    xl = !1;
  }
function EC(A, e, n, s, i, l, r, o, a) {
  var g = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, g);
  } catch (C) {
    this.onError(C);
  }
}
var pn = !1,
  Fs = null,
  Ts = !1,
  Nl = null,
  CC = {
    onError: function (A) {
      ((pn = !0), (Fs = A));
    },
  };
function IC(A, e, n, s, i, l, r, o, a) {
  ((pn = !1), (Fs = null), EC.apply(CC, arguments));
}
function dC(A, e, n, s, i, l, r, o, a) {
  if ((IC.apply(this, arguments), pn)) {
    if (pn) {
      var g = Fs;
      ((pn = !1), (Fs = null));
    } else throw Error(f(198));
    Ts || ((Ts = !0), (Nl = g));
  }
}
function mt(A) {
  var e = A,
    n = A;
  if (A.alternate) for (; e.return;) e = e.return;
  else {
    A = e;
    do ((e = A), e.flags & 4098 && (n = e.return), (A = e.return));
    while (A);
  }
  return e.tag === 3 ? n : null;
}
function pg(A) {
  if (A.tag === 13) {
    var e = A.memoizedState;
    if (
      (e === null && ((A = A.alternate), A !== null && (e = A.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function Ja(A) {
  if (mt(A) !== A) throw Error(f(188));
}
function uC(A) {
  var e = A.alternate;
  if (!e) {
    if (((e = mt(A)), e === null)) throw Error(f(188));
    return e !== A ? null : A;
  }
  for (var n = A, s = e; ;) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((s = i.return), s !== null)) {
        n = s;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l;) {
        if (l === n) return (Ja(i), A);
        if (l === s) return (Ja(i), e);
        l = l.sibling;
      }
      throw Error(f(188));
    }
    if (n.return !== s.return) ((n = i), (s = l));
    else {
      for (var r = !1, o = i.child; o;) {
        if (o === n) {
          ((r = !0), (n = i), (s = l));
          break;
        }
        if (o === s) {
          ((r = !0), (s = i), (n = l));
          break;
        }
        o = o.sibling;
      }
      if (!r) {
        for (o = l.child; o;) {
          if (o === n) {
            ((r = !0), (n = l), (s = i));
            break;
          }
          if (o === s) {
            ((r = !0), (s = l), (n = i));
            break;
          }
          o = o.sibling;
        }
        if (!r) throw Error(f(189));
      }
    }
    if (n.alternate !== s) throw Error(f(190));
  }
  if (n.tag !== 3) throw Error(f(188));
  return n.stateNode.current === n ? A : e;
}
function Sg(A) {
  return ((A = uC(A)), A !== null ? kg(A) : null);
}
function kg(A) {
  if (A.tag === 5 || A.tag === 6) return A;
  for (A = A.child; A !== null;) {
    var e = kg(A);
    if (e !== null) return e;
    A = A.sibling;
  }
  return null;
}
var fg = FA.unstable_scheduleCallback,
  xa = FA.unstable_cancelCallback,
  hC = FA.unstable_shouldYield,
  BC = FA.unstable_requestPaint,
  oA = FA.unstable_now,
  QC = FA.unstable_getCurrentPriorityLevel,
  Sr = FA.unstable_ImmediatePriority,
  Jg = FA.unstable_UserBlockingPriority,
  Vs = FA.unstable_NormalPriority,
  wC = FA.unstable_LowPriority,
  xg = FA.unstable_IdlePriority,
  ui = null,
  ce = null;
function mC(A) {
  if (ce && typeof ce.onCommitFiberRoot == "function")
    try {
      ce.onCommitFiberRoot(ui, A, void 0, (A.current.flags & 128) === 128);
    } catch {}
}
var se = Math.clz32 ? Math.clz32 : jC,
  DC = Math.log,
  MC = Math.LN2;
function jC(A) {
  return ((A >>>= 0), A === 0 ? 32 : (31 - ((DC(A) / MC) | 0)) | 0);
}
var Cs = 64,
  Is = 4194304;
function Dn(A) {
  switch (A & -A) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return A & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return A & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return A;
  }
}
function Ks(A, e) {
  var n = A.pendingLanes;
  if (n === 0) return 0;
  var s = 0,
    i = A.suspendedLanes,
    l = A.pingedLanes,
    r = n & 268435455;
  if (r !== 0) {
    var o = r & ~i;
    o !== 0 ? (s = Dn(o)) : ((l &= r), l !== 0 && (s = Dn(l)));
  } else ((r = n & ~i), r !== 0 ? (s = Dn(r)) : l !== 0 && (s = Dn(l)));
  if (s === 0) return 0;
  if (
    e !== 0 &&
    e !== s &&
    !(e & i) &&
    ((i = s & -s), (l = e & -e), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return e;
  if ((s & 4 && (s |= n & 16), (e = A.entangledLanes), e !== 0))
    for (A = A.entanglements, e &= s; 0 < e;)
      ((n = 31 - se(e)), (i = 1 << n), (s |= A[n]), (e &= ~i));
  return s;
}
function pC(A, e) {
  switch (A) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function SC(A, e) {
  for (
    var n = A.suspendedLanes,
      s = A.pingedLanes,
      i = A.expirationTimes,
      l = A.pendingLanes;
    0 < l;
  ) {
    var r = 31 - se(l),
      o = 1 << r,
      a = i[r];
    (a === -1
      ? (!(o & n) || o & s) && (i[r] = pC(o, e))
      : a <= e && (A.expiredLanes |= o),
      (l &= ~o));
  }
}
function Zl(A) {
  return (
    (A = A.pendingLanes & -1073741825),
    A !== 0 ? A : A & 1073741824 ? 1073741824 : 0
  );
}
function Ng() {
  var A = Cs;
  return ((Cs <<= 1), !(Cs & 4194240) && (Cs = 64), A);
}
function Pi(A) {
  for (var e = [], n = 0; 31 > n; n++) e.push(A);
  return e;
}
function es(A, e, n) {
  ((A.pendingLanes |= e),
    e !== 536870912 && ((A.suspendedLanes = 0), (A.pingedLanes = 0)),
    (A = A.eventTimes),
    (e = 31 - se(e)),
    (A[e] = n));
}
function kC(A, e) {
  var n = A.pendingLanes & ~e;
  ((A.pendingLanes = e),
    (A.suspendedLanes = 0),
    (A.pingedLanes = 0),
    (A.expiredLanes &= e),
    (A.mutableReadLanes &= e),
    (A.entangledLanes &= e),
    (e = A.entanglements));
  var s = A.eventTimes;
  for (A = A.expirationTimes; 0 < n;) {
    var i = 31 - se(n),
      l = 1 << i;
    ((e[i] = 0), (s[i] = -1), (A[i] = -1), (n &= ~l));
  }
}
function kr(A, e) {
  var n = (A.entangledLanes |= e);
  for (A = A.entanglements; n;) {
    var s = 31 - se(n),
      i = 1 << s;
    ((i & e) | (A[s] & e) && (A[s] |= e), (n &= ~i));
  }
}
var P = 0;
function Zg(A) {
  return (
    (A &= -A),
    1 < A ? (4 < A ? (A & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Gg,
  fr,
  yg,
  vg,
  Rg,
  Gl = !1,
  ds = [],
  We = null,
  Ue = null,
  Fe = null,
  Yn = new Map(),
  bn = new Map(),
  ye = [],
  fC =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Na(A, e) {
  switch (A) {
    case "focusin":
    case "focusout":
      We = null;
      break;
    case "dragenter":
    case "dragleave":
      Ue = null;
      break;
    case "mouseover":
    case "mouseout":
      Fe = null;
      break;
    case "pointerover":
    case "pointerout":
      Yn.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      bn.delete(e.pointerId);
  }
}
function Cn(A, e, n, s, i, l) {
  return A === null || A.nativeEvent !== l
    ? ((A = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: s,
        nativeEvent: l,
        targetContainers: [i],
      }),
      e !== null && ((e = ns(e)), e !== null && fr(e)),
      A)
    : ((A.eventSystemFlags |= s),
      (e = A.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      A);
}
function JC(A, e, n, s, i) {
  switch (e) {
    case "focusin":
      return ((We = Cn(We, A, e, n, s, i)), !0);
    case "dragenter":
      return ((Ue = Cn(Ue, A, e, n, s, i)), !0);
    case "mouseover":
      return ((Fe = Cn(Fe, A, e, n, s, i)), !0);
    case "pointerover":
      var l = i.pointerId;
      return (Yn.set(l, Cn(Yn.get(l) || null, A, e, n, s, i)), !0);
    case "gotpointercapture":
      return (
        (l = i.pointerId),
        bn.set(l, Cn(bn.get(l) || null, A, e, n, s, i)),
        !0
      );
  }
  return !1;
}
function Yg(A) {
  var e = at(A.target);
  if (e !== null) {
    var n = mt(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = pg(n)), e !== null)) {
          ((A.blockedOn = e),
            Rg(A.priority, function () {
              yg(n);
            }));
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        A.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  A.blockedOn = null;
}
function xs(A) {
  if (A.blockedOn !== null) return !1;
  for (var e = A.targetContainers; 0 < e.length;) {
    var n = yl(A.domEventName, A.eventSystemFlags, e[0], A.nativeEvent);
    if (n === null) {
      n = A.nativeEvent;
      var s = new n.constructor(n.type, n);
      ((fl = s), n.target.dispatchEvent(s), (fl = null));
    } else return ((e = ns(n)), e !== null && fr(e), (A.blockedOn = n), !1);
    e.shift();
  }
  return !0;
}
function Za(A, e, n) {
  xs(A) && n.delete(e);
}
function xC() {
  ((Gl = !1),
    We !== null && xs(We) && (We = null),
    Ue !== null && xs(Ue) && (Ue = null),
    Fe !== null && xs(Fe) && (Fe = null),
    Yn.forEach(Za),
    bn.forEach(Za));
}
function In(A, e) {
  A.blockedOn === e &&
    ((A.blockedOn = null),
    Gl ||
      ((Gl = !0),
      FA.unstable_scheduleCallback(FA.unstable_NormalPriority, xC)));
}
function Wn(A) {
  function e(i) {
    return In(i, A);
  }
  if (0 < ds.length) {
    In(ds[0], A);
    for (var n = 1; n < ds.length; n++) {
      var s = ds[n];
      s.blockedOn === A && (s.blockedOn = null);
    }
  }
  for (
    We !== null && In(We, A),
      Ue !== null && In(Ue, A),
      Fe !== null && In(Fe, A),
      Yn.forEach(e),
      bn.forEach(e),
      n = 0;
    n < ye.length;
    n++
  )
    ((s = ye[n]), s.blockedOn === A && (s.blockedOn = null));
  for (; 0 < ye.length && ((n = ye[0]), n.blockedOn === null);)
    (Yg(n), n.blockedOn === null && ye.shift());
}
var Kt = Se.ReactCurrentBatchConfig,
  Ls = !0;
function NC(A, e, n, s) {
  var i = P,
    l = Kt.transition;
  Kt.transition = null;
  try {
    ((P = 1), Jr(A, e, n, s));
  } finally {
    ((P = i), (Kt.transition = l));
  }
}
function ZC(A, e, n, s) {
  var i = P,
    l = Kt.transition;
  Kt.transition = null;
  try {
    ((P = 4), Jr(A, e, n, s));
  } finally {
    ((P = i), (Kt.transition = l));
  }
}
function Jr(A, e, n, s) {
  if (Ls) {
    var i = yl(A, e, n, s);
    if (i === null) (tl(A, e, s, Ps, n), Na(A, s));
    else if (JC(i, A, e, n, s)) s.stopPropagation();
    else if ((Na(A, s), e & 4 && -1 < fC.indexOf(A))) {
      for (; i !== null;) {
        var l = ns(i);
        if (
          (l !== null && Gg(l),
          (l = yl(A, e, n, s)),
          l === null && tl(A, e, s, Ps, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && s.stopPropagation();
    } else tl(A, e, s, null, n);
  }
}
var Ps = null;
function yl(A, e, n, s) {
  if (((Ps = null), (A = pr(s)), (A = at(A)), A !== null))
    if (((e = mt(A)), e === null)) A = null;
    else if (((n = e.tag), n === 13)) {
      if (((A = pg(e)), A !== null)) return A;
      A = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      A = null;
    } else e !== A && (A = null);
  return ((Ps = A), null);
}
function bg(A) {
  switch (A) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (QC()) {
        case Sr:
          return 1;
        case Jg:
          return 4;
        case Vs:
        case wC:
          return 16;
        case xg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Re = null,
  xr = null,
  Ns = null;
function Wg() {
  if (Ns) return Ns;
  var A,
    e = xr,
    n = e.length,
    s,
    i = "value" in Re ? Re.value : Re.textContent,
    l = i.length;
  for (A = 0; A < n && e[A] === i[A]; A++);
  var r = n - A;
  for (s = 1; s <= r && e[n - s] === i[l - s]; s++);
  return (Ns = i.slice(A, 1 < s ? 1 - s : void 0));
}
function Zs(A) {
  var e = A.keyCode;
  return (
    "charCode" in A
      ? ((A = A.charCode), A === 0 && e === 13 && (A = 13))
      : (A = e),
    A === 10 && (A = 13),
    32 <= A || A === 13 ? A : 0
  );
}
function us() {
  return !0;
}
function Ga() {
  return !1;
}
function KA(A) {
  function e(n, s, i, l, r) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = s),
      (this.nativeEvent = l),
      (this.target = r),
      (this.currentTarget = null));
    for (var o in A)
      A.hasOwnProperty(o) && ((n = A[o]), (this[o] = n ? n(l) : l[o]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? us
        : Ga),
      (this.isPropagationStopped = Ga),
      this
    );
  }
  return (
    lA(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = us));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = us));
      },
      persist: function () {},
      isPersistent: us,
    }),
    e
  );
}
var ln = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (A) {
      return A.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Nr = KA(ln),
  ts = lA({}, ln, { view: 0, detail: 0 }),
  GC = KA(ts),
  Oi,
  zi,
  dn,
  hi = lA({}, ts, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Zr,
    button: 0,
    buttons: 0,
    relatedTarget: function (A) {
      return A.relatedTarget === void 0
        ? A.fromElement === A.srcElement
          ? A.toElement
          : A.fromElement
        : A.relatedTarget;
    },
    movementX: function (A) {
      return "movementX" in A
        ? A.movementX
        : (A !== dn &&
            (dn && A.type === "mousemove"
              ? ((Oi = A.screenX - dn.screenX), (zi = A.screenY - dn.screenY))
              : (zi = Oi = 0),
            (dn = A)),
          Oi);
    },
    movementY: function (A) {
      return "movementY" in A ? A.movementY : zi;
    },
  }),
  ya = KA(hi),
  yC = lA({}, hi, { dataTransfer: 0 }),
  vC = KA(yC),
  RC = lA({}, ts, { relatedTarget: 0 }),
  Xi = KA(RC),
  YC = lA({}, ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bC = KA(YC),
  WC = lA({}, ln, {
    clipboardData: function (A) {
      return "clipboardData" in A ? A.clipboardData : window.clipboardData;
    },
  }),
  UC = KA(WC),
  FC = lA({}, ln, { data: 0 }),
  va = KA(FC),
  TC = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  VC = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  KC = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function LC(A) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(A) : (A = KC[A]) ? !!e[A] : !1;
}
function Zr() {
  return LC;
}
var PC = lA({}, ts, {
    key: function (A) {
      if (A.key) {
        var e = TC[A.key] || A.key;
        if (e !== "Unidentified") return e;
      }
      return A.type === "keypress"
        ? ((A = Zs(A)), A === 13 ? "Enter" : String.fromCharCode(A))
        : A.type === "keydown" || A.type === "keyup"
          ? VC[A.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zr,
    charCode: function (A) {
      return A.type === "keypress" ? Zs(A) : 0;
    },
    keyCode: function (A) {
      return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
    },
    which: function (A) {
      return A.type === "keypress"
        ? Zs(A)
        : A.type === "keydown" || A.type === "keyup"
          ? A.keyCode
          : 0;
    },
  }),
  OC = KA(PC),
  zC = lA({}, hi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ra = KA(zC),
  XC = lA({}, ts, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zr,
  }),
  HC = KA(XC),
  qC = lA({}, ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $C = KA(qC),
  _C = lA({}, hi, {
    deltaX: function (A) {
      return "deltaX" in A ? A.deltaX : "wheelDeltaX" in A ? -A.wheelDeltaX : 0;
    },
    deltaY: function (A) {
      return "deltaY" in A
        ? A.deltaY
        : "wheelDeltaY" in A
          ? -A.wheelDeltaY
          : "wheelDelta" in A
            ? -A.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  AI = KA(_C),
  eI = [9, 13, 27, 32],
  Gr = we && "CompositionEvent" in window,
  Sn = null;
we && "documentMode" in document && (Sn = document.documentMode);
var tI = we && "TextEvent" in window && !Sn,
  Ug = we && (!Gr || (Sn && 8 < Sn && 11 >= Sn)),
  Ya = " ",
  ba = !1;
function Fg(A, e) {
  switch (A) {
    case "keyup":
      return eI.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Tg(A) {
  return ((A = A.detail), typeof A == "object" && "data" in A ? A.data : null);
}
var Nt = !1;
function nI(A, e) {
  switch (A) {
    case "compositionend":
      return Tg(e);
    case "keypress":
      return e.which !== 32 ? null : ((ba = !0), Ya);
    case "textInput":
      return ((A = e.data), A === Ya && ba ? null : A);
    default:
      return null;
  }
}
function sI(A, e) {
  if (Nt)
    return A === "compositionend" || (!Gr && Fg(A, e))
      ? ((A = Wg()), (Ns = xr = Re = null), (Nt = !1), A)
      : null;
  switch (A) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Ug && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var iI = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Wa(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return e === "input" ? !!iI[A.type] : e === "textarea";
}
function Vg(A, e, n, s) {
  (wg(s),
    (e = Os(e, "onChange")),
    0 < e.length &&
      ((n = new Nr("onChange", "change", null, n, s)),
      A.push({ event: n, listeners: e })));
}
var kn = null,
  Un = null;
function lI(A) {
  Ac(A, 0);
}
function Bi(A) {
  var e = yt(A);
  if (Cg(e)) return A;
}
function rI(A, e) {
  if (A === "change") return e;
}
var Kg = !1;
if (we) {
  var Hi;
  if (we) {
    var qi = "oninput" in document;
    if (!qi) {
      var Ua = document.createElement("div");
      (Ua.setAttribute("oninput", "return;"),
        (qi = typeof Ua.oninput == "function"));
    }
    Hi = qi;
  } else Hi = !1;
  Kg = Hi && (!document.documentMode || 9 < document.documentMode);
}
function Fa() {
  kn && (kn.detachEvent("onpropertychange", Lg), (Un = kn = null));
}
function Lg(A) {
  if (A.propertyName === "value" && Bi(Un)) {
    var e = [];
    (Vg(e, Un, A, pr(A)), jg(lI, e));
  }
}
function aI(A, e, n) {
  A === "focusin"
    ? (Fa(), (kn = e), (Un = n), kn.attachEvent("onpropertychange", Lg))
    : A === "focusout" && Fa();
}
function oI(A) {
  if (A === "selectionchange" || A === "keyup" || A === "keydown")
    return Bi(Un);
}
function gI(A, e) {
  if (A === "click") return Bi(e);
}
function cI(A, e) {
  if (A === "input" || A === "change") return Bi(e);
}
function EI(A, e) {
  return (A === e && (A !== 0 || 1 / A === 1 / e)) || (A !== A && e !== e);
}
var le = typeof Object.is == "function" ? Object.is : EI;
function Fn(A, e) {
  if (le(A, e)) return !0;
  if (typeof A != "object" || A === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(A),
    s = Object.keys(e);
  if (n.length !== s.length) return !1;
  for (s = 0; s < n.length; s++) {
    var i = n[s];
    if (!ul.call(e, i) || !le(A[i], e[i])) return !1;
  }
  return !0;
}
function Ta(A) {
  for (; A && A.firstChild;) A = A.firstChild;
  return A;
}
function Va(A, e) {
  var n = Ta(A);
  A = 0;
  for (var s; n;) {
    if (n.nodeType === 3) {
      if (((s = A + n.textContent.length), A <= e && s >= e))
        return { node: n, offset: e - A };
      A = s;
    }
    A: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break A;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ta(n);
  }
}
function Pg(A, e) {
  return A && e
    ? A === e
      ? !0
      : A && A.nodeType === 3
        ? !1
        : e && e.nodeType === 3
          ? Pg(A, e.parentNode)
          : "contains" in A
            ? A.contains(e)
            : A.compareDocumentPosition
              ? !!(A.compareDocumentPosition(e) & 16)
              : !1
    : !1;
}
function Og() {
  for (var A = window, e = Us(); e instanceof A.HTMLIFrameElement;) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) A = e.contentWindow;
    else break;
    e = Us(A.document);
  }
  return e;
}
function yr(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (A.type === "text" ||
        A.type === "search" ||
        A.type === "tel" ||
        A.type === "url" ||
        A.type === "password")) ||
      e === "textarea" ||
      A.contentEditable === "true")
  );
}
function CI(A) {
  var e = Og(),
    n = A.focusedElem,
    s = A.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    Pg(n.ownerDocument.documentElement, n)
  ) {
    if (s !== null && yr(n)) {
      if (
        ((e = s.start),
        (A = s.end),
        A === void 0 && (A = e),
        "selectionStart" in n)
      )
        ((n.selectionStart = e),
          (n.selectionEnd = Math.min(A, n.value.length)));
      else if (
        ((A = ((e = n.ownerDocument || document) && e.defaultView) || window),
        A.getSelection)
      ) {
        A = A.getSelection();
        var i = n.textContent.length,
          l = Math.min(s.start, i);
        ((s = s.end === void 0 ? l : Math.min(s.end, i)),
          !A.extend && l > s && ((i = s), (s = l), (l = i)),
          (i = Va(n, l)));
        var r = Va(n, s);
        i &&
          r &&
          (A.rangeCount !== 1 ||
            A.anchorNode !== i.node ||
            A.anchorOffset !== i.offset ||
            A.focusNode !== r.node ||
            A.focusOffset !== r.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          A.removeAllRanges(),
          l > s
            ? (A.addRange(e), A.extend(r.node, r.offset))
            : (e.setEnd(r.node, r.offset), A.addRange(e)));
      }
    }
    for (e = [], A = n; (A = A.parentNode);)
      A.nodeType === 1 &&
        e.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      ((A = e[n]),
        (A.element.scrollLeft = A.left),
        (A.element.scrollTop = A.top));
  }
}
var II = we && "documentMode" in document && 11 >= document.documentMode,
  Zt = null,
  vl = null,
  fn = null,
  Rl = !1;
function Ka(A, e, n) {
  var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Rl ||
    Zt == null ||
    Zt !== Us(s) ||
    ((s = Zt),
    "selectionStart" in s && yr(s)
      ? (s = { start: s.selectionStart, end: s.selectionEnd })
      : ((s = (
          (s.ownerDocument && s.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (s = {
          anchorNode: s.anchorNode,
          anchorOffset: s.anchorOffset,
          focusNode: s.focusNode,
          focusOffset: s.focusOffset,
        })),
    (fn && Fn(fn, s)) ||
      ((fn = s),
      (s = Os(vl, "onSelect")),
      0 < s.length &&
        ((e = new Nr("onSelect", "select", null, e, n)),
        A.push({ event: e, listeners: s }),
        (e.target = Zt))));
}
function hs(A, e) {
  var n = {};
  return (
    (n[A.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + A] = "webkit" + e),
    (n["Moz" + A] = "moz" + e),
    n
  );
}
var Gt = {
    animationend: hs("Animation", "AnimationEnd"),
    animationiteration: hs("Animation", "AnimationIteration"),
    animationstart: hs("Animation", "AnimationStart"),
    transitionend: hs("Transition", "TransitionEnd"),
  },
  $i = {},
  zg = {};
we &&
  ((zg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Gt.animationend.animation,
    delete Gt.animationiteration.animation,
    delete Gt.animationstart.animation),
  "TransitionEvent" in window || delete Gt.transitionend.transition);
function Qi(A) {
  if ($i[A]) return $i[A];
  if (!Gt[A]) return A;
  var e = Gt[A],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in zg) return ($i[A] = e[n]);
  return A;
}
var Xg = Qi("animationend"),
  Hg = Qi("animationiteration"),
  qg = Qi("animationstart"),
  $g = Qi("transitionend"),
  _g = new Map(),
  La =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function et(A, e) {
  (_g.set(A, e), wt(e, [A]));
}
for (var _i = 0; _i < La.length; _i++) {
  var Al = La[_i],
    dI = Al.toLowerCase(),
    uI = Al[0].toUpperCase() + Al.slice(1);
  et(dI, "on" + uI);
}
et(Xg, "onAnimationEnd");
et(Hg, "onAnimationIteration");
et(qg, "onAnimationStart");
et("dblclick", "onDoubleClick");
et("focusin", "onFocus");
et("focusout", "onBlur");
et($g, "onTransitionEnd");
zt("onMouseEnter", ["mouseout", "mouseover"]);
zt("onMouseLeave", ["mouseout", "mouseover"]);
zt("onPointerEnter", ["pointerout", "pointerover"]);
zt("onPointerLeave", ["pointerout", "pointerover"]);
wt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
wt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
wt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
wt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
wt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Mn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  hI = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));
function Pa(A, e, n) {
  var s = A.type || "unknown-event";
  ((A.currentTarget = n), dC(s, e, void 0, A), (A.currentTarget = null));
}
function Ac(A, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < A.length; n++) {
    var s = A[n],
      i = s.event;
    s = s.listeners;
    A: {
      var l = void 0;
      if (e)
        for (var r = s.length - 1; 0 <= r; r--) {
          var o = s[r],
            a = o.instance,
            g = o.currentTarget;
          if (((o = o.listener), a !== l && i.isPropagationStopped())) break A;
          (Pa(i, o, g), (l = a));
        }
      else
        for (r = 0; r < s.length; r++) {
          if (
            ((o = s[r]),
            (a = o.instance),
            (g = o.currentTarget),
            (o = o.listener),
            a !== l && i.isPropagationStopped())
          )
            break A;
          (Pa(i, o, g), (l = a));
        }
    }
  }
  if (Ts) throw ((A = Nl), (Ts = !1), (Nl = null), A);
}
function q(A, e) {
  var n = e[Fl];
  n === void 0 && (n = e[Fl] = new Set());
  var s = A + "__bubble";
  n.has(s) || (ec(e, A, 2, !1), n.add(s));
}
function el(A, e, n) {
  var s = 0;
  (e && (s |= 4), ec(n, A, s, e));
}
var Bs = "_reactListening" + Math.random().toString(36).slice(2);
function Tn(A) {
  if (!A[Bs]) {
    ((A[Bs] = !0),
      ag.forEach(function (n) {
        n !== "selectionchange" && (hI.has(n) || el(n, !1, A), el(n, !0, A));
      }));
    var e = A.nodeType === 9 ? A : A.ownerDocument;
    e === null || e[Bs] || ((e[Bs] = !0), el("selectionchange", !1, e));
  }
}
function ec(A, e, n, s) {
  switch (bg(e)) {
    case 1:
      var i = NC;
      break;
    case 4:
      i = ZC;
      break;
    default:
      i = Jr;
  }
  ((n = i.bind(null, e, n, A)),
    (i = void 0),
    !xl ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (i = !0),
    s
      ? i !== void 0
        ? A.addEventListener(e, n, { capture: !0, passive: i })
        : A.addEventListener(e, n, !0)
      : i !== void 0
        ? A.addEventListener(e, n, { passive: i })
        : A.addEventListener(e, n, !1));
}
function tl(A, e, n, s, i) {
  var l = s;
  if (!(e & 1) && !(e & 2) && s !== null)
    A: for (;;) {
      if (s === null) return;
      var r = s.tag;
      if (r === 3 || r === 4) {
        var o = s.stateNode.containerInfo;
        if (o === i || (o.nodeType === 8 && o.parentNode === i)) break;
        if (r === 4)
          for (r = s.return; r !== null;) {
            var a = r.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = r.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            r = r.return;
          }
        for (; o !== null;) {
          if (((r = at(o)), r === null)) return;
          if (((a = r.tag), a === 5 || a === 6)) {
            s = l = r;
            continue A;
          }
          o = o.parentNode;
        }
      }
      s = s.return;
    }
  jg(function () {
    var g = l,
      C = pr(n),
      E = [];
    A: {
      var c = _g.get(A);
      if (c !== void 0) {
        var m = Nr,
          u = A;
        switch (A) {
          case "keypress":
            if (Zs(n) === 0) break A;
          case "keydown":
          case "keyup":
            m = OC;
            break;
          case "focusin":
            ((u = "focus"), (m = Xi));
            break;
          case "focusout":
            ((u = "blur"), (m = Xi));
            break;
          case "beforeblur":
          case "afterblur":
            m = Xi;
            break;
          case "click":
            if (n.button === 2) break A;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = ya;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = vC;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = HC;
            break;
          case Xg:
          case Hg:
          case qg:
            m = bC;
            break;
          case $g:
            m = $C;
            break;
          case "scroll":
            m = GC;
            break;
          case "wheel":
            m = AI;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = UC;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Ra;
        }
        var Q = (e & 4) !== 0,
          h = !Q && A === "scroll",
          d = Q ? (c !== null ? c + "Capture" : null) : c;
        Q = [];
        for (var I = g, w; I !== null;) {
          w = I;
          var D = w.stateNode;
          if (
            (w.tag === 5 &&
              D !== null &&
              ((w = D),
              d !== null && ((D = Rn(I, d)), D != null && Q.push(Vn(I, D, w)))),
            h)
          )
            break;
          I = I.return;
        }
        0 < Q.length &&
          ((c = new m(c, u, null, n, C)), E.push({ event: c, listeners: Q }));
      }
    }
    if (!(e & 7)) {
      A: {
        if (
          ((c = A === "mouseover" || A === "pointerover"),
          (m = A === "mouseout" || A === "pointerout"),
          c &&
            n !== fl &&
            (u = n.relatedTarget || n.fromElement) &&
            (at(u) || u[me]))
        )
          break A;
        if (
          (m || c) &&
          ((c =
            C.window === C
              ? C
              : (c = C.ownerDocument)
                ? c.defaultView || c.parentWindow
                : window),
          m
            ? ((u = n.relatedTarget || n.toElement),
              (m = g),
              (u = u ? at(u) : null),
              u !== null &&
                ((h = mt(u)), u !== h || (u.tag !== 5 && u.tag !== 6)) &&
                (u = null))
            : ((m = null), (u = g)),
          m !== u)
        ) {
          if (
            ((Q = ya),
            (D = "onMouseLeave"),
            (d = "onMouseEnter"),
            (I = "mouse"),
            (A === "pointerout" || A === "pointerover") &&
              ((Q = Ra),
              (D = "onPointerLeave"),
              (d = "onPointerEnter"),
              (I = "pointer")),
            (h = m == null ? c : yt(m)),
            (w = u == null ? c : yt(u)),
            (c = new Q(D, I + "leave", m, n, C)),
            (c.target = h),
            (c.relatedTarget = w),
            (D = null),
            at(C) === g &&
              ((Q = new Q(d, I + "enter", u, n, C)),
              (Q.target = w),
              (Q.relatedTarget = h),
              (D = Q)),
            (h = D),
            m && u)
          )
            e: {
              for (Q = m, d = u, I = 0, w = Q; w; w = St(w)) I++;
              for (w = 0, D = d; D; D = St(D)) w++;
              for (; 0 < I - w;) ((Q = St(Q)), I--);
              for (; 0 < w - I;) ((d = St(d)), w--);
              for (; I--;) {
                if (Q === d || (d !== null && Q === d.alternate)) break e;
                ((Q = St(Q)), (d = St(d)));
              }
              Q = null;
            }
          else Q = null;
          (m !== null && Oa(E, c, m, Q, !1),
            u !== null && h !== null && Oa(E, h, u, Q, !0));
        }
      }
      A: {
        if (
          ((c = g ? yt(g) : window),
          (m = c.nodeName && c.nodeName.toLowerCase()),
          m === "select" || (m === "input" && c.type === "file"))
        )
          var j = rI;
        else if (Wa(c))
          if (Kg) j = cI;
          else {
            j = oI;
            var J = aI;
          }
        else
          (m = c.nodeName) &&
            m.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (j = gI);
        if (j && (j = j(A, g))) {
          Vg(E, j, n, C);
          break A;
        }
        (J && J(A, c, g),
          A === "focusout" &&
            (J = c._wrapperState) &&
            J.controlled &&
            c.type === "number" &&
            Ml(c, "number", c.value));
      }
      switch (((J = g ? yt(g) : window), A)) {
        case "focusin":
          (Wa(J) || J.contentEditable === "true") &&
            ((Zt = J), (vl = g), (fn = null));
          break;
        case "focusout":
          fn = vl = Zt = null;
          break;
        case "mousedown":
          Rl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Rl = !1), Ka(E, n, C));
          break;
        case "selectionchange":
          if (II) break;
        case "keydown":
        case "keyup":
          Ka(E, n, C);
      }
      var M;
      if (Gr)
        A: {
          switch (A) {
            case "compositionstart":
              var p = "onCompositionStart";
              break A;
            case "compositionend":
              p = "onCompositionEnd";
              break A;
            case "compositionupdate":
              p = "onCompositionUpdate";
              break A;
          }
          p = void 0;
        }
      else
        Nt
          ? Fg(A, n) && (p = "onCompositionEnd")
          : A === "keydown" && n.keyCode === 229 && (p = "onCompositionStart");
      (p &&
        (Ug &&
          n.locale !== "ko" &&
          (Nt || p !== "onCompositionStart"
            ? p === "onCompositionEnd" && Nt && (M = Wg())
            : ((Re = C),
              (xr = "value" in Re ? Re.value : Re.textContent),
              (Nt = !0))),
        (J = Os(g, p)),
        0 < J.length &&
          ((p = new va(p, A, null, n, C)),
          E.push({ event: p, listeners: J }),
          M ? (p.data = M) : ((M = Tg(n)), M !== null && (p.data = M)))),
        (M = tI ? nI(A, n) : sI(A, n)) &&
          ((g = Os(g, "onBeforeInput")),
          0 < g.length &&
            ((C = new va("onBeforeInput", "beforeinput", null, n, C)),
            E.push({ event: C, listeners: g }),
            (C.data = M))));
    }
    Ac(E, e);
  });
}
function Vn(A, e, n) {
  return { instance: A, listener: e, currentTarget: n };
}
function Os(A, e) {
  for (var n = e + "Capture", s = []; A !== null;) {
    var i = A,
      l = i.stateNode;
    (i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = Rn(A, n)),
      l != null && s.unshift(Vn(A, l, i)),
      (l = Rn(A, e)),
      l != null && s.push(Vn(A, l, i))),
      (A = A.return));
  }
  return s;
}
function St(A) {
  if (A === null) return null;
  do A = A.return;
  while (A && A.tag !== 5);
  return A || null;
}
function Oa(A, e, n, s, i) {
  for (var l = e._reactName, r = []; n !== null && n !== s;) {
    var o = n,
      a = o.alternate,
      g = o.stateNode;
    if (a !== null && a === s) break;
    (o.tag === 5 &&
      g !== null &&
      ((o = g),
      i
        ? ((a = Rn(n, l)), a != null && r.unshift(Vn(n, a, o)))
        : i || ((a = Rn(n, l)), a != null && r.push(Vn(n, a, o)))),
      (n = n.return));
  }
  r.length !== 0 && A.push({ event: e, listeners: r });
}
var BI = /\r\n?/g,
  QI = /\u0000|\uFFFD/g;
function za(A) {
  return (typeof A == "string" ? A : "" + A)
    .replace(
      BI,
      `
`,
    )
    .replace(QI, "");
}
function Qs(A, e, n) {
  if (((e = za(e)), za(A) !== e && n)) throw Error(f(425));
}
function zs() {}
var Yl = null,
  bl = null;
function Wl(A, e) {
  return (
    A === "textarea" ||
    A === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var Ul = typeof setTimeout == "function" ? setTimeout : void 0,
  wI = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Xa = typeof Promise == "function" ? Promise : void 0,
  mI =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Xa < "u"
        ? function (A) {
            return Xa.resolve(null).then(A).catch(DI);
          }
        : Ul;
function DI(A) {
  setTimeout(function () {
    throw A;
  });
}
function nl(A, e) {
  var n = e,
    s = 0;
  do {
    var i = n.nextSibling;
    if ((A.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (s === 0) {
          (A.removeChild(i), Wn(e));
          return;
        }
        s--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || s++;
    n = i;
  } while (n);
  Wn(e);
}
function Te(A) {
  for (; A != null; A = A.nextSibling) {
    var e = A.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = A.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return A;
}
function Ha(A) {
  A = A.previousSibling;
  for (var e = 0; A;) {
    if (A.nodeType === 8) {
      var n = A.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return A;
        e--;
      } else n === "/$" && e++;
    }
    A = A.previousSibling;
  }
  return null;
}
var rn = Math.random().toString(36).slice(2),
  ge = "__reactFiber$" + rn,
  Kn = "__reactProps$" + rn,
  me = "__reactContainer$" + rn,
  Fl = "__reactEvents$" + rn,
  MI = "__reactListeners$" + rn,
  jI = "__reactHandles$" + rn;
function at(A) {
  var e = A[ge];
  if (e) return e;
  for (var n = A.parentNode; n;) {
    if ((e = n[me] || n[ge])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (A = Ha(A); A !== null;) {
          if ((n = A[ge])) return n;
          A = Ha(A);
        }
      return e;
    }
    ((A = n), (n = A.parentNode));
  }
  return null;
}
function ns(A) {
  return (
    (A = A[ge] || A[me]),
    !A || (A.tag !== 5 && A.tag !== 6 && A.tag !== 13 && A.tag !== 3) ? null : A
  );
}
function yt(A) {
  if (A.tag === 5 || A.tag === 6) return A.stateNode;
  throw Error(f(33));
}
function wi(A) {
  return A[Kn] || null;
}
var Tl = [],
  vt = -1;
function tt(A) {
  return { current: A };
}
function $(A) {
  0 > vt || ((A.current = Tl[vt]), (Tl[vt] = null), vt--);
}
function X(A, e) {
  (vt++, (Tl[vt] = A.current), (A.current = e));
}
var He = {},
  kA = tt(He),
  vA = tt(!1),
  It = He;
function Xt(A, e) {
  var n = A.type.contextTypes;
  if (!n) return He;
  var s = A.stateNode;
  if (s && s.__reactInternalMemoizedUnmaskedChildContext === e)
    return s.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = e[l];
  return (
    s &&
      ((A = A.stateNode),
      (A.__reactInternalMemoizedUnmaskedChildContext = e),
      (A.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function RA(A) {
  return ((A = A.childContextTypes), A != null);
}
function Xs() {
  ($(vA), $(kA));
}
function qa(A, e, n) {
  if (kA.current !== He) throw Error(f(168));
  (X(kA, e), X(vA, n));
}
function tc(A, e, n) {
  var s = A.stateNode;
  if (((e = e.childContextTypes), typeof s.getChildContext != "function"))
    return n;
  s = s.getChildContext();
  for (var i in s) if (!(i in e)) throw Error(f(108, aC(A) || "Unknown", i));
  return lA({}, n, s);
}
function Hs(A) {
  return (
    (A =
      ((A = A.stateNode) && A.__reactInternalMemoizedMergedChildContext) || He),
    (It = kA.current),
    X(kA, A),
    X(vA, vA.current),
    !0
  );
}
function $a(A, e, n) {
  var s = A.stateNode;
  if (!s) throw Error(f(169));
  (n
    ? ((A = tc(A, e, It)),
      (s.__reactInternalMemoizedMergedChildContext = A),
      $(vA),
      $(kA),
      X(kA, A))
    : $(vA),
    X(vA, n));
}
var de = null,
  mi = !1,
  sl = !1;
function nc(A) {
  de === null ? (de = [A]) : de.push(A);
}
function pI(A) {
  ((mi = !0), nc(A));
}
function nt() {
  if (!sl && de !== null) {
    sl = !0;
    var A = 0,
      e = P;
    try {
      var n = de;
      for (P = 1; A < n.length; A++) {
        var s = n[A];
        do s = s(!0);
        while (s !== null);
      }
      ((de = null), (mi = !1));
    } catch (i) {
      throw (de !== null && (de = de.slice(A + 1)), fg(Sr, nt), i);
    } finally {
      ((P = e), (sl = !1));
    }
  }
  return null;
}
var Rt = [],
  Yt = 0,
  qs = null,
  $s = 0,
  PA = [],
  OA = 0,
  dt = null,
  ue = 1,
  he = "";
function lt(A, e) {
  ((Rt[Yt++] = $s), (Rt[Yt++] = qs), (qs = A), ($s = e));
}
function sc(A, e, n) {
  ((PA[OA++] = ue), (PA[OA++] = he), (PA[OA++] = dt), (dt = A));
  var s = ue;
  A = he;
  var i = 32 - se(s) - 1;
  ((s &= ~(1 << i)), (n += 1));
  var l = 32 - se(e) + i;
  if (30 < l) {
    var r = i - (i % 5);
    ((l = (s & ((1 << r) - 1)).toString(32)),
      (s >>= r),
      (i -= r),
      (ue = (1 << (32 - se(e) + i)) | (n << i) | s),
      (he = l + A));
  } else ((ue = (1 << l) | (n << i) | s), (he = A));
}
function vr(A) {
  A.return !== null && (lt(A, 1), sc(A, 1, 0));
}
function Rr(A) {
  for (; A === qs;)
    ((qs = Rt[--Yt]), (Rt[Yt] = null), ($s = Rt[--Yt]), (Rt[Yt] = null));
  for (; A === dt;)
    ((dt = PA[--OA]),
      (PA[OA] = null),
      (he = PA[--OA]),
      (PA[OA] = null),
      (ue = PA[--OA]),
      (PA[OA] = null));
}
var UA = null,
  WA = null,
  tA = !1,
  ne = null;
function ic(A, e) {
  var n = zA(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = A),
    (e = A.deletions),
    e === null ? ((A.deletions = [n]), (A.flags |= 16)) : e.push(n));
}
function _a(A, e) {
  switch (A.tag) {
    case 5:
      var n = A.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((A.stateNode = e), (UA = A), (WA = Te(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = A.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((A.stateNode = e), (UA = A), (WA = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = dt !== null ? { id: ue, overflow: he } : null),
            (A.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = zA(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = A),
            (A.child = n),
            (UA = A),
            (WA = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Vl(A) {
  return (A.mode & 1) !== 0 && (A.flags & 128) === 0;
}
function Kl(A) {
  if (tA) {
    var e = WA;
    if (e) {
      var n = e;
      if (!_a(A, e)) {
        if (Vl(A)) throw Error(f(418));
        e = Te(n.nextSibling);
        var s = UA;
        e && _a(A, e)
          ? ic(s, n)
          : ((A.flags = (A.flags & -4097) | 2), (tA = !1), (UA = A));
      }
    } else {
      if (Vl(A)) throw Error(f(418));
      ((A.flags = (A.flags & -4097) | 2), (tA = !1), (UA = A));
    }
  }
}
function Ao(A) {
  for (A = A.return; A !== null && A.tag !== 5 && A.tag !== 3 && A.tag !== 13;)
    A = A.return;
  UA = A;
}
function ws(A) {
  if (A !== UA) return !1;
  if (!tA) return (Ao(A), (tA = !0), !1);
  var e;
  if (
    ((e = A.tag !== 3) &&
      !(e = A.tag !== 5) &&
      ((e = A.type),
      (e = e !== "head" && e !== "body" && !Wl(A.type, A.memoizedProps))),
    e && (e = WA))
  ) {
    if (Vl(A)) throw (lc(), Error(f(418)));
    for (; e;) (ic(A, e), (e = Te(e.nextSibling)));
  }
  if ((Ao(A), A.tag === 13)) {
    if (((A = A.memoizedState), (A = A !== null ? A.dehydrated : null), !A))
      throw Error(f(317));
    A: {
      for (A = A.nextSibling, e = 0; A;) {
        if (A.nodeType === 8) {
          var n = A.data;
          if (n === "/$") {
            if (e === 0) {
              WA = Te(A.nextSibling);
              break A;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        A = A.nextSibling;
      }
      WA = null;
    }
  } else WA = UA ? Te(A.stateNode.nextSibling) : null;
  return !0;
}
function lc() {
  for (var A = WA; A;) A = Te(A.nextSibling);
}
function Ht() {
  ((WA = UA = null), (tA = !1));
}
function Yr(A) {
  ne === null ? (ne = [A]) : ne.push(A);
}
var SI = Se.ReactCurrentBatchConfig;
function un(A, e, n) {
  if (
    ((A = n.ref), A !== null && typeof A != "function" && typeof A != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(f(309));
        var s = n.stateNode;
      }
      if (!s) throw Error(f(147, A));
      var i = s,
        l = "" + A;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === l
        ? e.ref
        : ((e = function (r) {
            var o = i.refs;
            r === null ? delete o[l] : (o[l] = r);
          }),
          (e._stringRef = l),
          e);
    }
    if (typeof A != "string") throw Error(f(284));
    if (!n._owner) throw Error(f(290, A));
  }
  return A;
}
function ms(A, e) {
  throw (
    (A = Object.prototype.toString.call(e)),
    Error(
      f(
        31,
        A === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : A,
      ),
    )
  );
}
function eo(A) {
  var e = A._init;
  return e(A._payload);
}
function rc(A) {
  function e(d, I) {
    if (A) {
      var w = d.deletions;
      w === null ? ((d.deletions = [I]), (d.flags |= 16)) : w.push(I);
    }
  }
  function n(d, I) {
    if (!A) return null;
    for (; I !== null;) (e(d, I), (I = I.sibling));
    return null;
  }
  function s(d, I) {
    for (d = new Map(); I !== null;)
      (I.key !== null ? d.set(I.key, I) : d.set(I.index, I), (I = I.sibling));
    return d;
  }
  function i(d, I) {
    return ((d = Pe(d, I)), (d.index = 0), (d.sibling = null), d);
  }
  function l(d, I, w) {
    return (
      (d.index = w),
      A
        ? ((w = d.alternate),
          w !== null
            ? ((w = w.index), w < I ? ((d.flags |= 2), I) : w)
            : ((d.flags |= 2), I))
        : ((d.flags |= 1048576), I)
    );
  }
  function r(d) {
    return (A && d.alternate === null && (d.flags |= 2), d);
  }
  function o(d, I, w, D) {
    return I === null || I.tag !== 6
      ? ((I = cl(w, d.mode, D)), (I.return = d), I)
      : ((I = i(I, w)), (I.return = d), I);
  }
  function a(d, I, w, D) {
    var j = w.type;
    return j === xt
      ? C(d, I, w.props.children, D, w.key)
      : I !== null &&
          (I.elementType === j ||
            (typeof j == "object" &&
              j !== null &&
              j.$$typeof === Ze &&
              eo(j) === I.type))
        ? ((D = i(I, w.props)), (D.ref = un(d, I, w)), (D.return = d), D)
        : ((D = Ws(w.type, w.key, w.props, null, d.mode, D)),
          (D.ref = un(d, I, w)),
          (D.return = d),
          D);
  }
  function g(d, I, w, D) {
    return I === null ||
      I.tag !== 4 ||
      I.stateNode.containerInfo !== w.containerInfo ||
      I.stateNode.implementation !== w.implementation
      ? ((I = El(w, d.mode, D)), (I.return = d), I)
      : ((I = i(I, w.children || [])), (I.return = d), I);
  }
  function C(d, I, w, D, j) {
    return I === null || I.tag !== 7
      ? ((I = Et(w, d.mode, D, j)), (I.return = d), I)
      : ((I = i(I, w)), (I.return = d), I);
  }
  function E(d, I, w) {
    if ((typeof I == "string" && I !== "") || typeof I == "number")
      return ((I = cl("" + I, d.mode, w)), (I.return = d), I);
    if (typeof I == "object" && I !== null) {
      switch (I.$$typeof) {
        case gs:
          return (
            (w = Ws(I.type, I.key, I.props, null, d.mode, w)),
            (w.ref = un(d, null, I)),
            (w.return = d),
            w
          );
        case Jt:
          return ((I = El(I, d.mode, w)), (I.return = d), I);
        case Ze:
          var D = I._init;
          return E(d, D(I._payload), w);
      }
      if (mn(I) || cn(I))
        return ((I = Et(I, d.mode, w, null)), (I.return = d), I);
      ms(d, I);
    }
    return null;
  }
  function c(d, I, w, D) {
    var j = I !== null ? I.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return j !== null ? null : o(d, I, "" + w, D);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case gs:
          return w.key === j ? a(d, I, w, D) : null;
        case Jt:
          return w.key === j ? g(d, I, w, D) : null;
        case Ze:
          return ((j = w._init), c(d, I, j(w._payload), D));
      }
      if (mn(w) || cn(w)) return j !== null ? null : C(d, I, w, D, null);
      ms(d, w);
    }
    return null;
  }
  function m(d, I, w, D, j) {
    if ((typeof D == "string" && D !== "") || typeof D == "number")
      return ((d = d.get(w) || null), o(I, d, "" + D, j));
    if (typeof D == "object" && D !== null) {
      switch (D.$$typeof) {
        case gs:
          return (
            (d = d.get(D.key === null ? w : D.key) || null),
            a(I, d, D, j)
          );
        case Jt:
          return (
            (d = d.get(D.key === null ? w : D.key) || null),
            g(I, d, D, j)
          );
        case Ze:
          var J = D._init;
          return m(d, I, w, J(D._payload), j);
      }
      if (mn(D) || cn(D)) return ((d = d.get(w) || null), C(I, d, D, j, null));
      ms(I, D);
    }
    return null;
  }
  function u(d, I, w, D) {
    for (
      var j = null, J = null, M = I, p = (I = 0), k = null;
      M !== null && p < w.length;
      p++
    ) {
      M.index > p ? ((k = M), (M = null)) : (k = M.sibling);
      var x = c(d, M, w[p], D);
      if (x === null) {
        M === null && (M = k);
        break;
      }
      (A && M && x.alternate === null && e(d, M),
        (I = l(x, I, p)),
        J === null ? (j = x) : (J.sibling = x),
        (J = x),
        (M = k));
    }
    if (p === w.length) return (n(d, M), tA && lt(d, p), j);
    if (M === null) {
      for (; p < w.length; p++)
        ((M = E(d, w[p], D)),
          M !== null &&
            ((I = l(M, I, p)),
            J === null ? (j = M) : (J.sibling = M),
            (J = M)));
      return (tA && lt(d, p), j);
    }
    for (M = s(d, M); p < w.length; p++)
      ((k = m(M, d, p, w[p], D)),
        k !== null &&
          (A && k.alternate !== null && M.delete(k.key === null ? p : k.key),
          (I = l(k, I, p)),
          J === null ? (j = k) : (J.sibling = k),
          (J = k)));
    return (
      A &&
        M.forEach(function (eA) {
          return e(d, eA);
        }),
      tA && lt(d, p),
      j
    );
  }
  function Q(d, I, w, D) {
    var j = cn(w);
    if (typeof j != "function") throw Error(f(150));
    if (((w = j.call(w)), w == null)) throw Error(f(151));
    for (
      var J = (j = null), M = I, p = (I = 0), k = null, x = w.next();
      M !== null && !x.done;
      p++, x = w.next()
    ) {
      M.index > p ? ((k = M), (M = null)) : (k = M.sibling);
      var eA = c(d, M, x.value, D);
      if (eA === null) {
        M === null && (M = k);
        break;
      }
      (A && M && eA.alternate === null && e(d, M),
        (I = l(eA, I, p)),
        J === null ? (j = eA) : (J.sibling = eA),
        (J = eA),
        (M = k));
    }
    if (x.done) return (n(d, M), tA && lt(d, p), j);
    if (M === null) {
      for (; !x.done; p++, x = w.next())
        ((x = E(d, x.value, D)),
          x !== null &&
            ((I = l(x, I, p)),
            J === null ? (j = x) : (J.sibling = x),
            (J = x)));
      return (tA && lt(d, p), j);
    }
    for (M = s(d, M); !x.done; p++, x = w.next())
      ((x = m(M, d, p, x.value, D)),
        x !== null &&
          (A && x.alternate !== null && M.delete(x.key === null ? p : x.key),
          (I = l(x, I, p)),
          J === null ? (j = x) : (J.sibling = x),
          (J = x)));
    return (
      A &&
        M.forEach(function (aA) {
          return e(d, aA);
        }),
      tA && lt(d, p),
      j
    );
  }
  function h(d, I, w, D) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === xt &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case gs:
          A: {
            for (var j = w.key, J = I; J !== null;) {
              if (J.key === j) {
                if (((j = w.type), j === xt)) {
                  if (J.tag === 7) {
                    (n(d, J.sibling),
                      (I = i(J, w.props.children)),
                      (I.return = d),
                      (d = I));
                    break A;
                  }
                } else if (
                  J.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === Ze &&
                    eo(j) === J.type)
                ) {
                  (n(d, J.sibling),
                    (I = i(J, w.props)),
                    (I.ref = un(d, J, w)),
                    (I.return = d),
                    (d = I));
                  break A;
                }
                n(d, J);
                break;
              } else e(d, J);
              J = J.sibling;
            }
            w.type === xt
              ? ((I = Et(w.props.children, d.mode, D, w.key)),
                (I.return = d),
                (d = I))
              : ((D = Ws(w.type, w.key, w.props, null, d.mode, D)),
                (D.ref = un(d, I, w)),
                (D.return = d),
                (d = D));
          }
          return r(d);
        case Jt:
          A: {
            for (J = w.key; I !== null;) {
              if (I.key === J)
                if (
                  I.tag === 4 &&
                  I.stateNode.containerInfo === w.containerInfo &&
                  I.stateNode.implementation === w.implementation
                ) {
                  (n(d, I.sibling),
                    (I = i(I, w.children || [])),
                    (I.return = d),
                    (d = I));
                  break A;
                } else {
                  n(d, I);
                  break;
                }
              else e(d, I);
              I = I.sibling;
            }
            ((I = El(w, d.mode, D)), (I.return = d), (d = I));
          }
          return r(d);
        case Ze:
          return ((J = w._init), h(d, I, J(w._payload), D));
      }
      if (mn(w)) return u(d, I, w, D);
      if (cn(w)) return Q(d, I, w, D);
      ms(d, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        I !== null && I.tag === 6
          ? (n(d, I.sibling), (I = i(I, w)), (I.return = d), (d = I))
          : (n(d, I), (I = cl(w, d.mode, D)), (I.return = d), (d = I)),
        r(d))
      : n(d, I);
  }
  return h;
}
var qt = rc(!0),
  ac = rc(!1),
  _s = tt(null),
  Ai = null,
  bt = null,
  br = null;
function Wr() {
  br = bt = Ai = null;
}
function Ur(A) {
  var e = _s.current;
  ($(_s), (A._currentValue = e));
}
function Ll(A, e, n) {
  for (; A !== null;) {
    var s = A.alternate;
    if (
      ((A.childLanes & e) !== e
        ? ((A.childLanes |= e), s !== null && (s.childLanes |= e))
        : s !== null && (s.childLanes & e) !== e && (s.childLanes |= e),
      A === n)
    )
      break;
    A = A.return;
  }
}
function Lt(A, e) {
  ((Ai = A),
    (br = bt = null),
    (A = A.dependencies),
    A !== null &&
      A.firstContext !== null &&
      (A.lanes & e && (yA = !0), (A.firstContext = null)));
}
function HA(A) {
  var e = A._currentValue;
  if (br !== A)
    if (((A = { context: A, memoizedValue: e, next: null }), bt === null)) {
      if (Ai === null) throw Error(f(308));
      ((bt = A), (Ai.dependencies = { lanes: 0, firstContext: A }));
    } else bt = bt.next = A;
  return e;
}
var ot = null;
function Fr(A) {
  ot === null ? (ot = [A]) : ot.push(A);
}
function oc(A, e, n, s) {
  var i = e.interleaved;
  return (
    i === null ? ((n.next = n), Fr(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    De(A, s)
  );
}
function De(A, e) {
  A.lanes |= e;
  var n = A.alternate;
  for (n !== null && (n.lanes |= e), n = A, A = A.return; A !== null;)
    ((A.childLanes |= e),
      (n = A.alternate),
      n !== null && (n.childLanes |= e),
      (n = A),
      (A = A.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Ge = !1;
function Tr(A) {
  A.updateQueue = {
    baseState: A.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function gc(A, e) {
  ((A = A.updateQueue),
    e.updateQueue === A &&
      (e.updateQueue = {
        baseState: A.baseState,
        firstBaseUpdate: A.firstBaseUpdate,
        lastBaseUpdate: A.lastBaseUpdate,
        shared: A.shared,
        effects: A.effects,
      }));
}
function Qe(A, e) {
  return {
    eventTime: A,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ve(A, e, n) {
  var s = A.updateQueue;
  if (s === null) return null;
  if (((s = s.shared), V & 2)) {
    var i = s.pending;
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (s.pending = e),
      De(A, n)
    );
  }
  return (
    (i = s.interleaved),
    i === null ? ((e.next = e), Fr(s)) : ((e.next = i.next), (i.next = e)),
    (s.interleaved = e),
    De(A, n)
  );
}
function Gs(A, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var s = e.lanes;
    ((s &= A.pendingLanes), (n |= s), (e.lanes = n), kr(A, n));
  }
}
function to(A, e) {
  var n = A.updateQueue,
    s = A.alternate;
  if (s !== null && ((s = s.updateQueue), n === s)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var r = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (l === null ? (i = l = r) : (l = l.next = r), (n = n.next));
      } while (n !== null);
      l === null ? (i = l = e) : (l = l.next = e);
    } else i = l = e;
    ((n = {
      baseState: s.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: s.shared,
      effects: s.effects,
    }),
      (A.updateQueue = n));
    return;
  }
  ((A = n.lastBaseUpdate),
    A === null ? (n.firstBaseUpdate = e) : (A.next = e),
    (n.lastBaseUpdate = e));
}
function ei(A, e, n, s) {
  var i = A.updateQueue;
  Ge = !1;
  var l = i.firstBaseUpdate,
    r = i.lastBaseUpdate,
    o = i.shared.pending;
  if (o !== null) {
    i.shared.pending = null;
    var a = o,
      g = a.next;
    ((a.next = null), r === null ? (l = g) : (r.next = g), (r = a));
    var C = A.alternate;
    C !== null &&
      ((C = C.updateQueue),
      (o = C.lastBaseUpdate),
      o !== r &&
        (o === null ? (C.firstBaseUpdate = g) : (o.next = g),
        (C.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var E = i.baseState;
    ((r = 0), (C = g = a = null), (o = l));
    do {
      var c = o.lane,
        m = o.eventTime;
      if ((s & c) === c) {
        C !== null &&
          (C = C.next =
            {
              eventTime: m,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        A: {
          var u = A,
            Q = o;
          switch (((c = e), (m = n), Q.tag)) {
            case 1:
              if (((u = Q.payload), typeof u == "function")) {
                E = u.call(m, E, c);
                break A;
              }
              E = u;
              break A;
            case 3:
              u.flags = (u.flags & -65537) | 128;
            case 0:
              if (
                ((u = Q.payload),
                (c = typeof u == "function" ? u.call(m, E, c) : u),
                c == null)
              )
                break A;
              E = lA({}, E, c);
              break A;
            case 2:
              Ge = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((A.flags |= 64),
          (c = i.effects),
          c === null ? (i.effects = [o]) : c.push(o));
      } else
        ((m = {
          eventTime: m,
          lane: c,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          C === null ? ((g = C = m), (a = E)) : (C = C.next = m),
          (r |= c));
      if (((o = o.next), o === null)) {
        if (((o = i.shared.pending), o === null)) break;
        ((c = o),
          (o = c.next),
          (c.next = null),
          (i.lastBaseUpdate = c),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (C === null && (a = E),
      (i.baseState = a),
      (i.firstBaseUpdate = g),
      (i.lastBaseUpdate = C),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e;
      do ((r |= i.lane), (i = i.next));
      while (i !== e);
    } else l === null && (i.shared.lanes = 0);
    ((ht |= r), (A.lanes = r), (A.memoizedState = E));
  }
}
function no(A, e, n) {
  if (((A = e.effects), (e.effects = null), A !== null))
    for (e = 0; e < A.length; e++) {
      var s = A[e],
        i = s.callback;
      if (i !== null) {
        if (((s.callback = null), (s = n), typeof i != "function"))
          throw Error(f(191, i));
        i.call(s);
      }
    }
}
var ss = {},
  Ee = tt(ss),
  Ln = tt(ss),
  Pn = tt(ss);
function gt(A) {
  if (A === ss) throw Error(f(174));
  return A;
}
function Vr(A, e) {
  switch ((X(Pn, e), X(Ln, A), X(Ee, ss), (A = e.nodeType), A)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : pl(null, "");
      break;
    default:
      ((A = A === 8 ? e.parentNode : e),
        (e = A.namespaceURI || null),
        (A = A.tagName),
        (e = pl(e, A)));
  }
  ($(Ee), X(Ee, e));
}
function $t() {
  ($(Ee), $(Ln), $(Pn));
}
function cc(A) {
  gt(Pn.current);
  var e = gt(Ee.current),
    n = pl(e, A.type);
  e !== n && (X(Ln, A), X(Ee, n));
}
function Kr(A) {
  Ln.current === A && ($(Ee), $(Ln));
}
var nA = tt(0);
function ti(A) {
  for (var e = A; e !== null;) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      ((e.child.return = e), (e = e.child));
      continue;
    }
    if (e === A) break;
    for (; e.sibling === null;) {
      if (e.return === null || e.return === A) return null;
      e = e.return;
    }
    ((e.sibling.return = e.return), (e = e.sibling));
  }
  return null;
}
var il = [];
function Lr() {
  for (var A = 0; A < il.length; A++)
    il[A]._workInProgressVersionPrimary = null;
  il.length = 0;
}
var ys = Se.ReactCurrentDispatcher,
  ll = Se.ReactCurrentBatchConfig,
  ut = 0,
  sA = null,
  IA = null,
  hA = null,
  ni = !1,
  Jn = !1,
  On = 0,
  kI = 0;
function jA() {
  throw Error(f(321));
}
function Pr(A, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < A.length; n++)
    if (!le(A[n], e[n])) return !1;
  return !0;
}
function Or(A, e, n, s, i, l) {
  if (
    ((ut = l),
    (sA = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (ys.current = A === null || A.memoizedState === null ? NI : ZI),
    (A = n(s, i)),
    Jn)
  ) {
    l = 0;
    do {
      if (((Jn = !1), (On = 0), 25 <= l)) throw Error(f(301));
      ((l += 1),
        (hA = IA = null),
        (e.updateQueue = null),
        (ys.current = GI),
        (A = n(s, i)));
    } while (Jn);
  }
  if (
    ((ys.current = si),
    (e = IA !== null && IA.next !== null),
    (ut = 0),
    (hA = IA = sA = null),
    (ni = !1),
    e)
  )
    throw Error(f(300));
  return A;
}
function zr() {
  var A = On !== 0;
  return ((On = 0), A);
}
function oe() {
  var A = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (hA === null ? (sA.memoizedState = hA = A) : (hA = hA.next = A), hA);
}
function qA() {
  if (IA === null) {
    var A = sA.alternate;
    A = A !== null ? A.memoizedState : null;
  } else A = IA.next;
  var e = hA === null ? sA.memoizedState : hA.next;
  if (e !== null) ((hA = e), (IA = A));
  else {
    if (A === null) throw Error(f(310));
    ((IA = A),
      (A = {
        memoizedState: IA.memoizedState,
        baseState: IA.baseState,
        baseQueue: IA.baseQueue,
        queue: IA.queue,
        next: null,
      }),
      hA === null ? (sA.memoizedState = hA = A) : (hA = hA.next = A));
  }
  return hA;
}
function zn(A, e) {
  return typeof e == "function" ? e(A) : e;
}
function rl(A) {
  var e = qA(),
    n = e.queue;
  if (n === null) throw Error(f(311));
  n.lastRenderedReducer = A;
  var s = IA,
    i = s.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var r = i.next;
      ((i.next = l.next), (l.next = r));
    }
    ((s.baseQueue = i = l), (n.pending = null));
  }
  if (i !== null) {
    ((l = i.next), (s = s.baseState));
    var o = (r = null),
      a = null,
      g = l;
    do {
      var C = g.lane;
      if ((ut & C) === C)
        (a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null,
            }),
          (s = g.hasEagerState ? g.eagerState : A(s, g.action)));
      else {
        var E = {
          lane: C,
          action: g.action,
          hasEagerState: g.hasEagerState,
          eagerState: g.eagerState,
          next: null,
        };
        (a === null ? ((o = a = E), (r = s)) : (a = a.next = E),
          (sA.lanes |= C),
          (ht |= C));
      }
      g = g.next;
    } while (g !== null && g !== l);
    (a === null ? (r = s) : (a.next = o),
      le(s, e.memoizedState) || (yA = !0),
      (e.memoizedState = s),
      (e.baseState = r),
      (e.baseQueue = a),
      (n.lastRenderedState = s));
  }
  if (((A = n.interleaved), A !== null)) {
    i = A;
    do ((l = i.lane), (sA.lanes |= l), (ht |= l), (i = i.next));
    while (i !== A);
  } else i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function al(A) {
  var e = qA(),
    n = e.queue;
  if (n === null) throw Error(f(311));
  n.lastRenderedReducer = A;
  var s = n.dispatch,
    i = n.pending,
    l = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var r = (i = i.next);
    do ((l = A(l, r.action)), (r = r.next));
    while (r !== i);
    (le(l, e.memoizedState) || (yA = !0),
      (e.memoizedState = l),
      e.baseQueue === null && (e.baseState = l),
      (n.lastRenderedState = l));
  }
  return [l, s];
}
function Ec() {}
function Cc(A, e) {
  var n = sA,
    s = qA(),
    i = e(),
    l = !le(s.memoizedState, i);
  if (
    (l && ((s.memoizedState = i), (yA = !0)),
    (s = s.queue),
    Xr(uc.bind(null, n, s, A), [A]),
    s.getSnapshot !== e || l || (hA !== null && hA.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Xn(9, dc.bind(null, n, s, i, e), void 0, null),
      BA === null)
    )
      throw Error(f(349));
    ut & 30 || Ic(n, e, i);
  }
  return i;
}
function Ic(A, e, n) {
  ((A.flags |= 16384),
    (A = { getSnapshot: e, value: n }),
    (e = sA.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (sA.updateQueue = e),
        (e.stores = [A]))
      : ((n = e.stores), n === null ? (e.stores = [A]) : n.push(A)));
}
function dc(A, e, n, s) {
  ((e.value = n), (e.getSnapshot = s), hc(e) && Bc(A));
}
function uc(A, e, n) {
  return n(function () {
    hc(e) && Bc(A);
  });
}
function hc(A) {
  var e = A.getSnapshot;
  A = A.value;
  try {
    var n = e();
    return !le(A, n);
  } catch {
    return !0;
  }
}
function Bc(A) {
  var e = De(A, 1);
  e !== null && ie(e, A, 1, -1);
}
function so(A) {
  var e = oe();
  return (
    typeof A == "function" && (A = A()),
    (e.memoizedState = e.baseState = A),
    (A = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zn,
      lastRenderedState: A,
    }),
    (e.queue = A),
    (A = A.dispatch = xI.bind(null, sA, A)),
    [e.memoizedState, A]
  );
}
function Xn(A, e, n, s) {
  return (
    (A = { tag: A, create: e, destroy: n, deps: s, next: null }),
    (e = sA.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (sA.updateQueue = e),
        (e.lastEffect = A.next = A))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = A.next = A)
          : ((s = n.next), (n.next = A), (A.next = s), (e.lastEffect = A))),
    A
  );
}
function Qc() {
  return qA().memoizedState;
}
function vs(A, e, n, s) {
  var i = oe();
  ((sA.flags |= A),
    (i.memoizedState = Xn(1 | e, n, void 0, s === void 0 ? null : s)));
}
function Di(A, e, n, s) {
  var i = qA();
  s = s === void 0 ? null : s;
  var l = void 0;
  if (IA !== null) {
    var r = IA.memoizedState;
    if (((l = r.destroy), s !== null && Pr(s, r.deps))) {
      i.memoizedState = Xn(e, n, l, s);
      return;
    }
  }
  ((sA.flags |= A), (i.memoizedState = Xn(1 | e, n, l, s)));
}
function io(A, e) {
  return vs(8390656, 8, A, e);
}
function Xr(A, e) {
  return Di(2048, 8, A, e);
}
function wc(A, e) {
  return Di(4, 2, A, e);
}
function mc(A, e) {
  return Di(4, 4, A, e);
}
function Dc(A, e) {
  if (typeof e == "function")
    return (
      (A = A()),
      e(A),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (A = A()),
      (e.current = A),
      function () {
        e.current = null;
      }
    );
}
function Mc(A, e, n) {
  return (
    (n = n != null ? n.concat([A]) : null),
    Di(4, 4, Dc.bind(null, e, A), n)
  );
}
function Hr() {}
function jc(A, e) {
  var n = qA();
  e = e === void 0 ? null : e;
  var s = n.memoizedState;
  return s !== null && e !== null && Pr(e, s[1])
    ? s[0]
    : ((n.memoizedState = [A, e]), A);
}
function pc(A, e) {
  var n = qA();
  e = e === void 0 ? null : e;
  var s = n.memoizedState;
  return s !== null && e !== null && Pr(e, s[1])
    ? s[0]
    : ((A = A()), (n.memoizedState = [A, e]), A);
}
function Sc(A, e, n) {
  return ut & 21
    ? (le(n, e) || ((n = Ng()), (sA.lanes |= n), (ht |= n), (A.baseState = !0)),
      e)
    : (A.baseState && ((A.baseState = !1), (yA = !0)), (A.memoizedState = n));
}
function fI(A, e) {
  var n = P;
  ((P = n !== 0 && 4 > n ? n : 4), A(!0));
  var s = ll.transition;
  ll.transition = {};
  try {
    (A(!1), e());
  } finally {
    ((P = n), (ll.transition = s));
  }
}
function kc() {
  return qA().memoizedState;
}
function JI(A, e, n) {
  var s = Le(A);
  if (
    ((n = {
      lane: s,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    fc(A))
  )
    Jc(e, n);
  else if (((n = oc(A, e, n, s)), n !== null)) {
    var i = xA();
    (ie(n, A, s, i), xc(n, e, s));
  }
}
function xI(A, e, n) {
  var s = Le(A),
    i = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fc(A)) Jc(e, i);
  else {
    var l = A.alternate;
    if (
      A.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = e.lastRenderedReducer), l !== null)
    )
      try {
        var r = e.lastRenderedState,
          o = l(r, n);
        if (((i.hasEagerState = !0), (i.eagerState = o), le(o, r))) {
          var a = e.interleaved;
          (a === null
            ? ((i.next = i), Fr(e))
            : ((i.next = a.next), (a.next = i)),
            (e.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = oc(A, e, i, s)),
      n !== null && ((i = xA()), ie(n, A, s, i), xc(n, e, s)));
  }
}
function fc(A) {
  var e = A.alternate;
  return A === sA || (e !== null && e === sA);
}
function Jc(A, e) {
  Jn = ni = !0;
  var n = A.pending;
  (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (A.pending = e));
}
function xc(A, e, n) {
  if (n & 4194240) {
    var s = e.lanes;
    ((s &= A.pendingLanes), (n |= s), (e.lanes = n), kr(A, n));
  }
}
var si = {
    readContext: HA,
    useCallback: jA,
    useContext: jA,
    useEffect: jA,
    useImperativeHandle: jA,
    useInsertionEffect: jA,
    useLayoutEffect: jA,
    useMemo: jA,
    useReducer: jA,
    useRef: jA,
    useState: jA,
    useDebugValue: jA,
    useDeferredValue: jA,
    useTransition: jA,
    useMutableSource: jA,
    useSyncExternalStore: jA,
    useId: jA,
    unstable_isNewReconciler: !1,
  },
  NI = {
    readContext: HA,
    useCallback: function (A, e) {
      return ((oe().memoizedState = [A, e === void 0 ? null : e]), A);
    },
    useContext: HA,
    useEffect: io,
    useImperativeHandle: function (A, e, n) {
      return (
        (n = n != null ? n.concat([A]) : null),
        vs(4194308, 4, Dc.bind(null, e, A), n)
      );
    },
    useLayoutEffect: function (A, e) {
      return vs(4194308, 4, A, e);
    },
    useInsertionEffect: function (A, e) {
      return vs(4, 2, A, e);
    },
    useMemo: function (A, e) {
      var n = oe();
      return (
        (e = e === void 0 ? null : e),
        (A = A()),
        (n.memoizedState = [A, e]),
        A
      );
    },
    useReducer: function (A, e, n) {
      var s = oe();
      return (
        (e = n !== void 0 ? n(e) : e),
        (s.memoizedState = s.baseState = e),
        (A = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: A,
          lastRenderedState: e,
        }),
        (s.queue = A),
        (A = A.dispatch = JI.bind(null, sA, A)),
        [s.memoizedState, A]
      );
    },
    useRef: function (A) {
      var e = oe();
      return ((A = { current: A }), (e.memoizedState = A));
    },
    useState: so,
    useDebugValue: Hr,
    useDeferredValue: function (A) {
      return (oe().memoizedState = A);
    },
    useTransition: function () {
      var A = so(!1),
        e = A[0];
      return ((A = fI.bind(null, A[1])), (oe().memoizedState = A), [e, A]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (A, e, n) {
      var s = sA,
        i = oe();
      if (tA) {
        if (n === void 0) throw Error(f(407));
        n = n();
      } else {
        if (((n = e()), BA === null)) throw Error(f(349));
        ut & 30 || Ic(s, e, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: e };
      return (
        (i.queue = l),
        io(uc.bind(null, s, l, A), [A]),
        (s.flags |= 2048),
        Xn(9, dc.bind(null, s, l, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var A = oe(),
        e = BA.identifierPrefix;
      if (tA) {
        var n = he,
          s = ue;
        ((n = (s & ~(1 << (32 - se(s) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = On++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":"));
      } else ((n = kI++), (e = ":" + e + "r" + n.toString(32) + ":"));
      return (A.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  ZI = {
    readContext: HA,
    useCallback: jc,
    useContext: HA,
    useEffect: Xr,
    useImperativeHandle: Mc,
    useInsertionEffect: wc,
    useLayoutEffect: mc,
    useMemo: pc,
    useReducer: rl,
    useRef: Qc,
    useState: function () {
      return rl(zn);
    },
    useDebugValue: Hr,
    useDeferredValue: function (A) {
      var e = qA();
      return Sc(e, IA.memoizedState, A);
    },
    useTransition: function () {
      var A = rl(zn)[0],
        e = qA().memoizedState;
      return [A, e];
    },
    useMutableSource: Ec,
    useSyncExternalStore: Cc,
    useId: kc,
    unstable_isNewReconciler: !1,
  },
  GI = {
    readContext: HA,
    useCallback: jc,
    useContext: HA,
    useEffect: Xr,
    useImperativeHandle: Mc,
    useInsertionEffect: wc,
    useLayoutEffect: mc,
    useMemo: pc,
    useReducer: al,
    useRef: Qc,
    useState: function () {
      return al(zn);
    },
    useDebugValue: Hr,
    useDeferredValue: function (A) {
      var e = qA();
      return IA === null ? (e.memoizedState = A) : Sc(e, IA.memoizedState, A);
    },
    useTransition: function () {
      var A = al(zn)[0],
        e = qA().memoizedState;
      return [A, e];
    },
    useMutableSource: Ec,
    useSyncExternalStore: Cc,
    useId: kc,
    unstable_isNewReconciler: !1,
  };
function ee(A, e) {
  if (A && A.defaultProps) {
    ((e = lA({}, e)), (A = A.defaultProps));
    for (var n in A) e[n] === void 0 && (e[n] = A[n]);
    return e;
  }
  return e;
}
function Pl(A, e, n, s) {
  ((e = A.memoizedState),
    (n = n(s, e)),
    (n = n == null ? e : lA({}, e, n)),
    (A.memoizedState = n),
    A.lanes === 0 && (A.updateQueue.baseState = n));
}
var Mi = {
  isMounted: function (A) {
    return (A = A._reactInternals) ? mt(A) === A : !1;
  },
  enqueueSetState: function (A, e, n) {
    A = A._reactInternals;
    var s = xA(),
      i = Le(A),
      l = Qe(s, i);
    ((l.payload = e),
      n != null && (l.callback = n),
      (e = Ve(A, l, i)),
      e !== null && (ie(e, A, i, s), Gs(e, A, i)));
  },
  enqueueReplaceState: function (A, e, n) {
    A = A._reactInternals;
    var s = xA(),
      i = Le(A),
      l = Qe(s, i);
    ((l.tag = 1),
      (l.payload = e),
      n != null && (l.callback = n),
      (e = Ve(A, l, i)),
      e !== null && (ie(e, A, i, s), Gs(e, A, i)));
  },
  enqueueForceUpdate: function (A, e) {
    A = A._reactInternals;
    var n = xA(),
      s = Le(A),
      i = Qe(n, s);
    ((i.tag = 2),
      e != null && (i.callback = e),
      (e = Ve(A, i, s)),
      e !== null && (ie(e, A, s, n), Gs(e, A, s)));
  },
};
function lo(A, e, n, s, i, l, r) {
  return (
    (A = A.stateNode),
    typeof A.shouldComponentUpdate == "function"
      ? A.shouldComponentUpdate(s, l, r)
      : e.prototype && e.prototype.isPureReactComponent
        ? !Fn(n, s) || !Fn(i, l)
        : !0
  );
}
function Nc(A, e, n) {
  var s = !1,
    i = He,
    l = e.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = HA(l))
      : ((i = RA(e) ? It : kA.current),
        (s = e.contextTypes),
        (l = (s = s != null) ? Xt(A, i) : He)),
    (e = new e(n, l)),
    (A.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = Mi),
    (A.stateNode = e),
    (e._reactInternals = A),
    s &&
      ((A = A.stateNode),
      (A.__reactInternalMemoizedUnmaskedChildContext = i),
      (A.__reactInternalMemoizedMaskedChildContext = l)),
    e
  );
}
function ro(A, e, n, s) {
  ((A = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, s),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, s),
    e.state !== A && Mi.enqueueReplaceState(e, e.state, null));
}
function Ol(A, e, n, s) {
  var i = A.stateNode;
  ((i.props = n), (i.state = A.memoizedState), (i.refs = {}), Tr(A));
  var l = e.contextType;
  (typeof l == "object" && l !== null
    ? (i.context = HA(l))
    : ((l = RA(e) ? It : kA.current), (i.context = Xt(A, l))),
    (i.state = A.memoizedState),
    (l = e.getDerivedStateFromProps),
    typeof l == "function" && (Pl(A, e, l, n), (i.state = A.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((e = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && Mi.enqueueReplaceState(i, i.state, null),
      ei(A, n, i, s),
      (i.state = A.memoizedState)),
    typeof i.componentDidMount == "function" && (A.flags |= 4194308));
}
function _t(A, e) {
  try {
    var n = "",
      s = e;
    do ((n += rC(s)), (s = s.return));
    while (s);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: A, source: e, stack: i, digest: null };
}
function ol(A, e, n) {
  return { value: A, source: null, stack: n ?? null, digest: e ?? null };
}
function zl(A, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var yI = typeof WeakMap == "function" ? WeakMap : Map;
function Zc(A, e, n) {
  ((n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var s = e.value;
  return (
    (n.callback = function () {
      (li || ((li = !0), (sr = s)), zl(A, e));
    }),
    n
  );
}
function Gc(A, e, n) {
  ((n = Qe(-1, n)), (n.tag = 3));
  var s = A.type.getDerivedStateFromError;
  if (typeof s == "function") {
    var i = e.value;
    ((n.payload = function () {
      return s(i);
    }),
      (n.callback = function () {
        zl(A, e);
      }));
  }
  var l = A.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        (zl(A, e),
          typeof s != "function" &&
            (Ke === null ? (Ke = new Set([this])) : Ke.add(this)));
        var r = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: r !== null ? r : "",
        });
      }),
    n
  );
}
function ao(A, e, n) {
  var s = A.pingCache;
  if (s === null) {
    s = A.pingCache = new yI();
    var i = new Set();
    s.set(e, i);
  } else ((i = s.get(e)), i === void 0 && ((i = new Set()), s.set(e, i)));
  i.has(n) || (i.add(n), (A = zI.bind(null, A, e, n)), e.then(A, A));
}
function oo(A) {
  do {
    var e;
    if (
      ((e = A.tag === 13) &&
        ((e = A.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return A;
    A = A.return;
  } while (A !== null);
  return null;
}
function go(A, e, n, s, i) {
  return A.mode & 1
    ? ((A.flags |= 65536), (A.lanes = i), A)
    : (A === e
        ? (A.flags |= 65536)
        : ((A.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = Qe(-1, 1)), (e.tag = 2), Ve(n, e, 1))),
          (n.lanes |= 1)),
      A);
}
var vI = Se.ReactCurrentOwner,
  yA = !1;
function fA(A, e, n, s) {
  e.child = A === null ? ac(e, null, n, s) : qt(e, A.child, n, s);
}
function co(A, e, n, s, i) {
  n = n.render;
  var l = e.ref;
  return (
    Lt(e, i),
    (s = Or(A, e, n, s, l, i)),
    (n = zr()),
    A !== null && !yA
      ? ((e.updateQueue = A.updateQueue),
        (e.flags &= -2053),
        (A.lanes &= ~i),
        Me(A, e, i))
      : (tA && n && vr(e), (e.flags |= 1), fA(A, e, s, i), e.child)
  );
}
function Eo(A, e, n, s, i) {
  if (A === null) {
    var l = n.type;
    return typeof l == "function" &&
      !sa(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = l), yc(A, e, l, s, i))
      : ((A = Ws(n.type, null, s, e, e.mode, i)),
        (A.ref = e.ref),
        (A.return = e),
        (e.child = A));
  }
  if (((l = A.child), !(A.lanes & i))) {
    var r = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Fn), n(r, s) && A.ref === e.ref)
    )
      return Me(A, e, i);
  }
  return (
    (e.flags |= 1),
    (A = Pe(l, s)),
    (A.ref = e.ref),
    (A.return = e),
    (e.child = A)
  );
}
function yc(A, e, n, s, i) {
  if (A !== null) {
    var l = A.memoizedProps;
    if (Fn(l, s) && A.ref === e.ref)
      if (((yA = !1), (e.pendingProps = s = l), (A.lanes & i) !== 0))
        A.flags & 131072 && (yA = !0);
      else return ((e.lanes = A.lanes), Me(A, e, i));
  }
  return Xl(A, e, n, s, i);
}
function vc(A, e, n) {
  var s = e.pendingProps,
    i = s.children,
    l = A !== null ? A.memoizedState : null;
  if (s.mode === "hidden")
    if (!(e.mode & 1))
      ((e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        X(Ut, bA),
        (bA |= n));
    else {
      if (!(n & 1073741824))
        return (
          (A = l !== null ? l.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: A,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          X(Ut, bA),
          (bA |= A),
          null
        );
      ((e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = l !== null ? l.baseLanes : n),
        X(Ut, bA),
        (bA |= s));
    }
  else
    (l !== null ? ((s = l.baseLanes | n), (e.memoizedState = null)) : (s = n),
      X(Ut, bA),
      (bA |= s));
  return (fA(A, e, i, n), e.child);
}
function Rc(A, e) {
  var n = e.ref;
  ((A === null && n !== null) || (A !== null && A.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function Xl(A, e, n, s, i) {
  var l = RA(n) ? It : kA.current;
  return (
    (l = Xt(e, l)),
    Lt(e, i),
    (n = Or(A, e, n, s, l, i)),
    (s = zr()),
    A !== null && !yA
      ? ((e.updateQueue = A.updateQueue),
        (e.flags &= -2053),
        (A.lanes &= ~i),
        Me(A, e, i))
      : (tA && s && vr(e), (e.flags |= 1), fA(A, e, n, i), e.child)
  );
}
function Co(A, e, n, s, i) {
  if (RA(n)) {
    var l = !0;
    Hs(e);
  } else l = !1;
  if ((Lt(e, i), e.stateNode === null))
    (Rs(A, e), Nc(e, n, s), Ol(e, n, s, i), (s = !0));
  else if (A === null) {
    var r = e.stateNode,
      o = e.memoizedProps;
    r.props = o;
    var a = r.context,
      g = n.contextType;
    typeof g == "object" && g !== null
      ? (g = HA(g))
      : ((g = RA(n) ? It : kA.current), (g = Xt(e, g)));
    var C = n.getDerivedStateFromProps,
      E =
        typeof C == "function" ||
        typeof r.getSnapshotBeforeUpdate == "function";
    (E ||
      (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
        typeof r.componentWillReceiveProps != "function") ||
      ((o !== s || a !== g) && ro(e, r, s, g)),
      (Ge = !1));
    var c = e.memoizedState;
    ((r.state = c),
      ei(e, s, r, i),
      (a = e.memoizedState),
      o !== s || c !== a || vA.current || Ge
        ? (typeof C == "function" && (Pl(e, n, C, s), (a = e.memoizedState)),
          (o = Ge || lo(e, n, o, s, c, a, g))
            ? (E ||
                (typeof r.UNSAFE_componentWillMount != "function" &&
                  typeof r.componentWillMount != "function") ||
                (typeof r.componentWillMount == "function" &&
                  r.componentWillMount(),
                typeof r.UNSAFE_componentWillMount == "function" &&
                  r.UNSAFE_componentWillMount()),
              typeof r.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof r.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = s),
              (e.memoizedState = a)),
          (r.props = s),
          (r.state = a),
          (r.context = g),
          (s = o))
        : (typeof r.componentDidMount == "function" && (e.flags |= 4194308),
          (s = !1)));
  } else {
    ((r = e.stateNode),
      gc(A, e),
      (o = e.memoizedProps),
      (g = e.type === e.elementType ? o : ee(e.type, o)),
      (r.props = g),
      (E = e.pendingProps),
      (c = r.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = HA(a))
        : ((a = RA(n) ? It : kA.current), (a = Xt(e, a))));
    var m = n.getDerivedStateFromProps;
    ((C =
      typeof m == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function") ||
      (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
        typeof r.componentWillReceiveProps != "function") ||
      ((o !== E || c !== a) && ro(e, r, s, a)),
      (Ge = !1),
      (c = e.memoizedState),
      (r.state = c),
      ei(e, s, r, i));
    var u = e.memoizedState;
    o !== E || c !== u || vA.current || Ge
      ? (typeof m == "function" && (Pl(e, n, m, s), (u = e.memoizedState)),
        (g = Ge || lo(e, n, g, s, c, u, a) || !1)
          ? (C ||
              (typeof r.UNSAFE_componentWillUpdate != "function" &&
                typeof r.componentWillUpdate != "function") ||
              (typeof r.componentWillUpdate == "function" &&
                r.componentWillUpdate(s, u, a),
              typeof r.UNSAFE_componentWillUpdate == "function" &&
                r.UNSAFE_componentWillUpdate(s, u, a)),
            typeof r.componentDidUpdate == "function" && (e.flags |= 4),
            typeof r.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof r.componentDidUpdate != "function" ||
              (o === A.memoizedProps && c === A.memoizedState) ||
              (e.flags |= 4),
            typeof r.getSnapshotBeforeUpdate != "function" ||
              (o === A.memoizedProps && c === A.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = s),
            (e.memoizedState = u)),
        (r.props = s),
        (r.state = u),
        (r.context = a),
        (s = g))
      : (typeof r.componentDidUpdate != "function" ||
          (o === A.memoizedProps && c === A.memoizedState) ||
          (e.flags |= 4),
        typeof r.getSnapshotBeforeUpdate != "function" ||
          (o === A.memoizedProps && c === A.memoizedState) ||
          (e.flags |= 1024),
        (s = !1));
  }
  return Hl(A, e, n, s, l, i);
}
function Hl(A, e, n, s, i, l) {
  Rc(A, e);
  var r = (e.flags & 128) !== 0;
  if (!s && !r) return (i && $a(e, n, !1), Me(A, e, l));
  ((s = e.stateNode), (vI.current = e));
  var o =
    r && typeof n.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (e.flags |= 1),
    A !== null && r
      ? ((e.child = qt(e, A.child, null, l)), (e.child = qt(e, null, o, l)))
      : fA(A, e, o, l),
    (e.memoizedState = s.state),
    i && $a(e, n, !0),
    e.child
  );
}
function Yc(A) {
  var e = A.stateNode;
  (e.pendingContext
    ? qa(A, e.pendingContext, e.pendingContext !== e.context)
    : e.context && qa(A, e.context, !1),
    Vr(A, e.containerInfo));
}
function Io(A, e, n, s, i) {
  return (Ht(), Yr(i), (e.flags |= 256), fA(A, e, n, s), e.child);
}
var ql = { dehydrated: null, treeContext: null, retryLane: 0 };
function $l(A) {
  return { baseLanes: A, cachePool: null, transitions: null };
}
function bc(A, e, n) {
  var s = e.pendingProps,
    i = nA.current,
    l = !1,
    r = (e.flags & 128) !== 0,
    o;
  if (
    ((o = r) ||
      (o = A !== null && A.memoizedState === null ? !1 : (i & 2) !== 0),
    o
      ? ((l = !0), (e.flags &= -129))
      : (A === null || A.memoizedState !== null) && (i |= 1),
    X(nA, i & 1),
    A === null)
  )
    return (
      Kl(e),
      (A = e.memoizedState),
      A !== null && ((A = A.dehydrated), A !== null)
        ? (e.mode & 1
            ? A.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((r = s.children),
          (A = s.fallback),
          l
            ? ((s = e.mode),
              (l = e.child),
              (r = { mode: "hidden", children: r }),
              !(s & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = r))
                : (l = Si(r, s, 0, null)),
              (A = Et(A, s, n, null)),
              (l.return = e),
              (A.return = e),
              (l.sibling = A),
              (e.child = l),
              (e.child.memoizedState = $l(n)),
              (e.memoizedState = ql),
              A)
            : qr(e, r))
    );
  if (((i = A.memoizedState), i !== null && ((o = i.dehydrated), o !== null)))
    return RI(A, e, r, s, o, i, n);
  if (l) {
    ((l = s.fallback), (r = e.mode), (i = A.child), (o = i.sibling));
    var a = { mode: "hidden", children: s.children };
    return (
      !(r & 1) && e.child !== i
        ? ((s = e.child),
          (s.childLanes = 0),
          (s.pendingProps = a),
          (e.deletions = null))
        : ((s = Pe(i, a)), (s.subtreeFlags = i.subtreeFlags & 14680064)),
      o !== null ? (l = Pe(o, l)) : ((l = Et(l, r, n, null)), (l.flags |= 2)),
      (l.return = e),
      (s.return = e),
      (s.sibling = l),
      (e.child = s),
      (s = l),
      (l = e.child),
      (r = A.child.memoizedState),
      (r =
        r === null
          ? $l(n)
          : {
              baseLanes: r.baseLanes | n,
              cachePool: null,
              transitions: r.transitions,
            }),
      (l.memoizedState = r),
      (l.childLanes = A.childLanes & ~n),
      (e.memoizedState = ql),
      s
    );
  }
  return (
    (l = A.child),
    (A = l.sibling),
    (s = Pe(l, { mode: "visible", children: s.children })),
    !(e.mode & 1) && (s.lanes = n),
    (s.return = e),
    (s.sibling = null),
    A !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [A]), (e.flags |= 16)) : n.push(A)),
    (e.child = s),
    (e.memoizedState = null),
    s
  );
}
function qr(A, e) {
  return (
    (e = Si({ mode: "visible", children: e }, A.mode, 0, null)),
    (e.return = A),
    (A.child = e)
  );
}
function Ds(A, e, n, s) {
  return (
    s !== null && Yr(s),
    qt(e, A.child, null, n),
    (A = qr(e, e.pendingProps.children)),
    (A.flags |= 2),
    (e.memoizedState = null),
    A
  );
}
function RI(A, e, n, s, i, l, r) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (s = ol(Error(f(422)))), Ds(A, e, r, s))
      : e.memoizedState !== null
        ? ((e.child = A.child), (e.flags |= 128), null)
        : ((l = s.fallback),
          (i = e.mode),
          (s = Si({ mode: "visible", children: s.children }, i, 0, null)),
          (l = Et(l, i, r, null)),
          (l.flags |= 2),
          (s.return = e),
          (l.return = e),
          (s.sibling = l),
          (e.child = s),
          e.mode & 1 && qt(e, A.child, null, r),
          (e.child.memoizedState = $l(r)),
          (e.memoizedState = ql),
          l);
  if (!(e.mode & 1)) return Ds(A, e, r, null);
  if (i.data === "$!") {
    if (((s = i.nextSibling && i.nextSibling.dataset), s)) var o = s.dgst;
    return (
      (s = o),
      (l = Error(f(419))),
      (s = ol(l, s, void 0)),
      Ds(A, e, r, s)
    );
  }
  if (((o = (r & A.childLanes) !== 0), yA || o)) {
    if (((s = BA), s !== null)) {
      switch (r & -r) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (s.suspendedLanes | r) ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), De(A, i), ie(s, A, i, -1)));
    }
    return (na(), (s = ol(Error(f(421)))), Ds(A, e, r, s));
  }
  return i.data === "$?"
    ? ((e.flags |= 128),
      (e.child = A.child),
      (e = XI.bind(null, A)),
      (i._reactRetry = e),
      null)
    : ((A = l.treeContext),
      (WA = Te(i.nextSibling)),
      (UA = e),
      (tA = !0),
      (ne = null),
      A !== null &&
        ((PA[OA++] = ue),
        (PA[OA++] = he),
        (PA[OA++] = dt),
        (ue = A.id),
        (he = A.overflow),
        (dt = e)),
      (e = qr(e, s.children)),
      (e.flags |= 4096),
      e);
}
function uo(A, e, n) {
  A.lanes |= e;
  var s = A.alternate;
  (s !== null && (s.lanes |= e), Ll(A.return, e, n));
}
function gl(A, e, n, s, i) {
  var l = A.memoizedState;
  l === null
    ? (A.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: s,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = e),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = s),
      (l.tail = n),
      (l.tailMode = i));
}
function Wc(A, e, n) {
  var s = e.pendingProps,
    i = s.revealOrder,
    l = s.tail;
  if ((fA(A, e, s.children, n), (s = nA.current), s & 2))
    ((s = (s & 1) | 2), (e.flags |= 128));
  else {
    if (A !== null && A.flags & 128)
      A: for (A = e.child; A !== null;) {
        if (A.tag === 13) A.memoizedState !== null && uo(A, n, e);
        else if (A.tag === 19) uo(A, n, e);
        else if (A.child !== null) {
          ((A.child.return = A), (A = A.child));
          continue;
        }
        if (A === e) break A;
        for (; A.sibling === null;) {
          if (A.return === null || A.return === e) break A;
          A = A.return;
        }
        ((A.sibling.return = A.return), (A = A.sibling));
      }
    s &= 1;
  }
  if ((X(nA, s), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null;)
          ((A = n.alternate),
            A !== null && ti(A) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = e.child), (e.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          gl(e, !1, i, n, l));
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null;) {
          if (((A = i.alternate), A !== null && ti(A) === null)) {
            e.child = i;
            break;
          }
          ((A = i.sibling), (i.sibling = n), (n = i), (i = A));
        }
        gl(e, !0, n, null, l);
        break;
      case "together":
        gl(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Rs(A, e) {
  !(e.mode & 1) &&
    A !== null &&
    ((A.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Me(A, e, n) {
  if (
    (A !== null && (e.dependencies = A.dependencies),
    (ht |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (A !== null && e.child !== A.child) throw Error(f(153));
  if (e.child !== null) {
    for (
      A = e.child, n = Pe(A, A.pendingProps), e.child = n, n.return = e;
      A.sibling !== null;
    )
      ((A = A.sibling),
        (n = n.sibling = Pe(A, A.pendingProps)),
        (n.return = e));
    n.sibling = null;
  }
  return e.child;
}
function YI(A, e, n) {
  switch (e.tag) {
    case 3:
      (Yc(e), Ht());
      break;
    case 5:
      cc(e);
      break;
    case 1:
      RA(e.type) && Hs(e);
      break;
    case 4:
      Vr(e, e.stateNode.containerInfo);
      break;
    case 10:
      var s = e.type._context,
        i = e.memoizedProps.value;
      (X(_s, s._currentValue), (s._currentValue = i));
      break;
    case 13:
      if (((s = e.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (X(nA, nA.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
            ? bc(A, e, n)
            : (X(nA, nA.current & 1),
              (A = Me(A, e, n)),
              A !== null ? A.sibling : null);
      X(nA, nA.current & 1);
      break;
    case 19:
      if (((s = (n & e.childLanes) !== 0), A.flags & 128)) {
        if (s) return Wc(A, e, n);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        X(nA, nA.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((e.lanes = 0), vc(A, e, n));
  }
  return Me(A, e, n);
}
var Uc, _l, Fc, Tc;
Uc = function (A, e) {
  for (var n = e.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) A.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
_l = function () {};
Fc = function (A, e, n, s) {
  var i = A.memoizedProps;
  if (i !== s) {
    ((A = e.stateNode), gt(Ee.current));
    var l = null;
    switch (n) {
      case "input":
        ((i = ml(A, i)), (s = ml(A, s)), (l = []));
        break;
      case "select":
        ((i = lA({}, i, { value: void 0 })),
          (s = lA({}, s, { value: void 0 })),
          (l = []));
        break;
      case "textarea":
        ((i = jl(A, i)), (s = jl(A, s)), (l = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof s.onClick == "function" &&
          (A.onclick = zs);
    }
    Sl(n, s);
    var r;
    n = null;
    for (g in i)
      if (!s.hasOwnProperty(g) && i.hasOwnProperty(g) && i[g] != null)
        if (g === "style") {
          var o = i[g];
          for (r in o) o.hasOwnProperty(r) && (n || (n = {}), (n[r] = ""));
        } else
          g !== "dangerouslySetInnerHTML" &&
            g !== "children" &&
            g !== "suppressContentEditableWarning" &&
            g !== "suppressHydrationWarning" &&
            g !== "autoFocus" &&
            (yn.hasOwnProperty(g)
              ? l || (l = [])
              : (l = l || []).push(g, null));
    for (g in s) {
      var a = s[g];
      if (
        ((o = i != null ? i[g] : void 0),
        s.hasOwnProperty(g) && a !== o && (a != null || o != null))
      )
        if (g === "style")
          if (o) {
            for (r in o)
              !o.hasOwnProperty(r) ||
                (a && a.hasOwnProperty(r)) ||
                (n || (n = {}), (n[r] = ""));
            for (r in a)
              a.hasOwnProperty(r) &&
                o[r] !== a[r] &&
                (n || (n = {}), (n[r] = a[r]));
          } else (n || (l || (l = []), l.push(g, n)), (n = a));
        else
          g === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (o = o ? o.__html : void 0),
              a != null && o !== a && (l = l || []).push(g, a))
            : g === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (l = l || []).push(g, "" + a)
              : g !== "suppressContentEditableWarning" &&
                g !== "suppressHydrationWarning" &&
                (yn.hasOwnProperty(g)
                  ? (a != null && g === "onScroll" && q("scroll", A),
                    l || o === a || (l = []))
                  : (l = l || []).push(g, a));
    }
    n && (l = l || []).push("style", n);
    var g = l;
    (e.updateQueue = g) && (e.flags |= 4);
  }
};
Tc = function (A, e, n, s) {
  n !== s && (e.flags |= 4);
};
function hn(A, e) {
  if (!tA)
    switch (A.tailMode) {
      case "hidden":
        e = A.tail;
        for (var n = null; e !== null;)
          (e.alternate !== null && (n = e), (e = e.sibling));
        n === null ? (A.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = A.tail;
        for (var s = null; n !== null;)
          (n.alternate !== null && (s = n), (n = n.sibling));
        s === null
          ? e || A.tail === null
            ? (A.tail = null)
            : (A.tail.sibling = null)
          : (s.sibling = null);
    }
}
function pA(A) {
  var e = A.alternate !== null && A.alternate.child === A.child,
    n = 0,
    s = 0;
  if (e)
    for (var i = A.child; i !== null;)
      ((n |= i.lanes | i.childLanes),
        (s |= i.subtreeFlags & 14680064),
        (s |= i.flags & 14680064),
        (i.return = A),
        (i = i.sibling));
  else
    for (i = A.child; i !== null;)
      ((n |= i.lanes | i.childLanes),
        (s |= i.subtreeFlags),
        (s |= i.flags),
        (i.return = A),
        (i = i.sibling));
  return ((A.subtreeFlags |= s), (A.childLanes = n), e);
}
function bI(A, e, n) {
  var s = e.pendingProps;
  switch ((Rr(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (pA(e), null);
    case 1:
      return (RA(e.type) && Xs(), pA(e), null);
    case 3:
      return (
        (s = e.stateNode),
        $t(),
        $(vA),
        $(kA),
        Lr(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (A === null || A.child === null) &&
          (ws(e)
            ? (e.flags |= 4)
            : A === null ||
              (A.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), ne !== null && (rr(ne), (ne = null)))),
        _l(A, e),
        pA(e),
        null
      );
    case 5:
      Kr(e);
      var i = gt(Pn.current);
      if (((n = e.type), A !== null && e.stateNode != null))
        (Fc(A, e, n, s, i),
          A.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152)));
      else {
        if (!s) {
          if (e.stateNode === null) throw Error(f(166));
          return (pA(e), null);
        }
        if (((A = gt(Ee.current)), ws(e))) {
          ((s = e.stateNode), (n = e.type));
          var l = e.memoizedProps;
          switch (((s[ge] = e), (s[Kn] = l), (A = (e.mode & 1) !== 0), n)) {
            case "dialog":
              (q("cancel", s), q("close", s));
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", s);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Mn.length; i++) q(Mn[i], s);
              break;
            case "source":
              q("error", s);
              break;
            case "img":
            case "image":
            case "link":
              (q("error", s), q("load", s));
              break;
            case "details":
              q("toggle", s);
              break;
            case "input":
              (ja(s, l), q("invalid", s));
              break;
            case "select":
              ((s._wrapperState = { wasMultiple: !!l.multiple }),
                q("invalid", s));
              break;
            case "textarea":
              (Sa(s, l), q("invalid", s));
          }
          (Sl(n, l), (i = null));
          for (var r in l)
            if (l.hasOwnProperty(r)) {
              var o = l[r];
              r === "children"
                ? typeof o == "string"
                  ? s.textContent !== o &&
                    (l.suppressHydrationWarning !== !0 &&
                      Qs(s.textContent, o, A),
                    (i = ["children", o]))
                  : typeof o == "number" &&
                    s.textContent !== "" + o &&
                    (l.suppressHydrationWarning !== !0 &&
                      Qs(s.textContent, o, A),
                    (i = ["children", "" + o]))
                : yn.hasOwnProperty(r) &&
                  o != null &&
                  r === "onScroll" &&
                  q("scroll", s);
            }
          switch (n) {
            case "input":
              (cs(s), pa(s, l, !0));
              break;
            case "textarea":
              (cs(s), ka(s));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (s.onclick = zs);
          }
          ((s = i), (e.updateQueue = s), s !== null && (e.flags |= 4));
        } else {
          ((r = i.nodeType === 9 ? i : i.ownerDocument),
            A === "http://www.w3.org/1999/xhtml" && (A = ug(n)),
            A === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((A = r.createElement("div")),
                  (A.innerHTML = "<script><\/script>"),
                  (A = A.removeChild(A.firstChild)))
                : typeof s.is == "string"
                  ? (A = r.createElement(n, { is: s.is }))
                  : ((A = r.createElement(n)),
                    n === "select" &&
                      ((r = A),
                      s.multiple
                        ? (r.multiple = !0)
                        : s.size && (r.size = s.size)))
              : (A = r.createElementNS(A, n)),
            (A[ge] = e),
            (A[Kn] = s),
            Uc(A, e, !1, !1),
            (e.stateNode = A));
          A: {
            switch (((r = kl(n, s)), n)) {
              case "dialog":
                (q("cancel", A), q("close", A), (i = s));
                break;
              case "iframe":
              case "object":
              case "embed":
                (q("load", A), (i = s));
                break;
              case "video":
              case "audio":
                for (i = 0; i < Mn.length; i++) q(Mn[i], A);
                i = s;
                break;
              case "source":
                (q("error", A), (i = s));
                break;
              case "img":
              case "image":
              case "link":
                (q("error", A), q("load", A), (i = s));
                break;
              case "details":
                (q("toggle", A), (i = s));
                break;
              case "input":
                (ja(A, s), (i = ml(A, s)), q("invalid", A));
                break;
              case "option":
                i = s;
                break;
              case "select":
                ((A._wrapperState = { wasMultiple: !!s.multiple }),
                  (i = lA({}, s, { value: void 0 })),
                  q("invalid", A));
                break;
              case "textarea":
                (Sa(A, s), (i = jl(A, s)), q("invalid", A));
                break;
              default:
                i = s;
            }
            (Sl(n, i), (o = i));
            for (l in o)
              if (o.hasOwnProperty(l)) {
                var a = o[l];
                l === "style"
                  ? Qg(A, a)
                  : l === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && hg(A, a))
                    : l === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && vn(A, a)
                        : typeof a == "number" && vn(A, "" + a)
                      : l !== "suppressContentEditableWarning" &&
                        l !== "suppressHydrationWarning" &&
                        l !== "autoFocus" &&
                        (yn.hasOwnProperty(l)
                          ? a != null && l === "onScroll" && q("scroll", A)
                          : a != null && mr(A, l, a, r));
              }
            switch (n) {
              case "input":
                (cs(A), pa(A, s, !1));
                break;
              case "textarea":
                (cs(A), ka(A));
                break;
              case "option":
                s.value != null && A.setAttribute("value", "" + Xe(s.value));
                break;
              case "select":
                ((A.multiple = !!s.multiple),
                  (l = s.value),
                  l != null
                    ? Ft(A, !!s.multiple, l, !1)
                    : s.defaultValue != null &&
                      Ft(A, !!s.multiple, s.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (A.onclick = zs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                s = !!s.autoFocus;
                break A;
              case "img":
                s = !0;
                break A;
              default:
                s = !1;
            }
          }
          s && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return (pA(e), null);
    case 6:
      if (A && e.stateNode != null) Tc(A, e, A.memoizedProps, s);
      else {
        if (typeof s != "string" && e.stateNode === null) throw Error(f(166));
        if (((n = gt(Pn.current)), gt(Ee.current), ws(e))) {
          if (
            ((s = e.stateNode),
            (n = e.memoizedProps),
            (s[ge] = e),
            (l = s.nodeValue !== n) && ((A = UA), A !== null))
          )
            switch (A.tag) {
              case 3:
                Qs(s.nodeValue, n, (A.mode & 1) !== 0);
                break;
              case 5:
                A.memoizedProps.suppressHydrationWarning !== !0 &&
                  Qs(s.nodeValue, n, (A.mode & 1) !== 0);
            }
          l && (e.flags |= 4);
        } else
          ((s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s)),
            (s[ge] = e),
            (e.stateNode = s));
      }
      return (pA(e), null);
    case 13:
      if (
        ($(nA),
        (s = e.memoizedState),
        A === null ||
          (A.memoizedState !== null && A.memoizedState.dehydrated !== null))
      ) {
        if (tA && WA !== null && e.mode & 1 && !(e.flags & 128))
          (lc(), Ht(), (e.flags |= 98560), (l = !1));
        else if (((l = ws(e)), s !== null && s.dehydrated !== null)) {
          if (A === null) {
            if (!l) throw Error(f(318));
            if (
              ((l = e.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(f(317));
            l[ge] = e;
          } else
            (Ht(),
              !(e.flags & 128) && (e.memoizedState = null),
              (e.flags |= 4));
          (pA(e), (l = !1));
        } else (ne !== null && (rr(ne), (ne = null)), (l = !0));
        if (!l) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((s = s !== null),
          s !== (A !== null && A.memoizedState !== null) &&
            s &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (A === null || nA.current & 1 ? dA === 0 && (dA = 3) : na())),
          e.updateQueue !== null && (e.flags |= 4),
          pA(e),
          null);
    case 4:
      return (
        $t(),
        _l(A, e),
        A === null && Tn(e.stateNode.containerInfo),
        pA(e),
        null
      );
    case 10:
      return (Ur(e.type._context), pA(e), null);
    case 17:
      return (RA(e.type) && Xs(), pA(e), null);
    case 19:
      if (($(nA), (l = e.memoizedState), l === null)) return (pA(e), null);
      if (((s = (e.flags & 128) !== 0), (r = l.rendering), r === null))
        if (s) hn(l, !1);
        else {
          if (dA !== 0 || (A !== null && A.flags & 128))
            for (A = e.child; A !== null;) {
              if (((r = ti(A)), r !== null)) {
                for (
                  e.flags |= 128,
                    hn(l, !1),
                    s = r.updateQueue,
                    s !== null && ((e.updateQueue = s), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    s = n,
                    n = e.child;
                  n !== null;
                )
                  ((l = n),
                    (A = s),
                    (l.flags &= 14680066),
                    (r = l.alternate),
                    r === null
                      ? ((l.childLanes = 0),
                        (l.lanes = A),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = r.childLanes),
                        (l.lanes = r.lanes),
                        (l.child = r.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = r.memoizedProps),
                        (l.memoizedState = r.memoizedState),
                        (l.updateQueue = r.updateQueue),
                        (l.type = r.type),
                        (A = r.dependencies),
                        (l.dependencies =
                          A === null
                            ? null
                            : {
                                lanes: A.lanes,
                                firstContext: A.firstContext,
                              })),
                    (n = n.sibling));
                return (X(nA, (nA.current & 1) | 2), e.child);
              }
              A = A.sibling;
            }
          l.tail !== null &&
            oA() > An &&
            ((e.flags |= 128), (s = !0), hn(l, !1), (e.lanes = 4194304));
        }
      else {
        if (!s)
          if (((A = ti(r)), A !== null)) {
            if (
              ((e.flags |= 128),
              (s = !0),
              (n = A.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              hn(l, !0),
              l.tail === null && l.tailMode === "hidden" && !r.alternate && !tA)
            )
              return (pA(e), null);
          } else
            2 * oA() - l.renderingStartTime > An &&
              n !== 1073741824 &&
              ((e.flags |= 128), (s = !0), hn(l, !1), (e.lanes = 4194304));
        l.isBackwards
          ? ((r.sibling = e.child), (e.child = r))
          : ((n = l.last),
            n !== null ? (n.sibling = r) : (e.child = r),
            (l.last = r));
      }
      return l.tail !== null
        ? ((e = l.tail),
          (l.rendering = e),
          (l.tail = e.sibling),
          (l.renderingStartTime = oA()),
          (e.sibling = null),
          (n = nA.current),
          X(nA, s ? (n & 1) | 2 : n & 1),
          e)
        : (pA(e), null);
    case 22:
    case 23:
      return (
        ta(),
        (s = e.memoizedState !== null),
        A !== null && (A.memoizedState !== null) !== s && (e.flags |= 8192),
        s && e.mode & 1
          ? bA & 1073741824 && (pA(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : pA(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(f(156, e.tag));
}
function WI(A, e) {
  switch ((Rr(e), e.tag)) {
    case 1:
      return (
        RA(e.type) && Xs(),
        (A = e.flags),
        A & 65536 ? ((e.flags = (A & -65537) | 128), e) : null
      );
    case 3:
      return (
        $t(),
        $(vA),
        $(kA),
        Lr(),
        (A = e.flags),
        A & 65536 && !(A & 128) ? ((e.flags = (A & -65537) | 128), e) : null
      );
    case 5:
      return (Kr(e), null);
    case 13:
      if (($(nA), (A = e.memoizedState), A !== null && A.dehydrated !== null)) {
        if (e.alternate === null) throw Error(f(340));
        Ht();
      }
      return (
        (A = e.flags),
        A & 65536 ? ((e.flags = (A & -65537) | 128), e) : null
      );
    case 19:
      return ($(nA), null);
    case 4:
      return ($t(), null);
    case 10:
      return (Ur(e.type._context), null);
    case 22:
    case 23:
      return (ta(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Ms = !1,
  SA = !1,
  UI = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function Wt(A, e) {
  var n = A.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (s) {
        rA(A, e, s);
      }
    else n.current = null;
}
function Ar(A, e, n) {
  try {
    n();
  } catch (s) {
    rA(A, e, s);
  }
}
var ho = !1;
function FI(A, e) {
  if (((Yl = Ls), (A = Og()), yr(A))) {
    if ("selectionStart" in A)
      var n = { start: A.selectionStart, end: A.selectionEnd };
    else
      A: {
        n = ((n = A.ownerDocument) && n.defaultView) || window;
        var s = n.getSelection && n.getSelection();
        if (s && s.rangeCount !== 0) {
          n = s.anchorNode;
          var i = s.anchorOffset,
            l = s.focusNode;
          s = s.focusOffset;
          try {
            (n.nodeType, l.nodeType);
          } catch {
            n = null;
            break A;
          }
          var r = 0,
            o = -1,
            a = -1,
            g = 0,
            C = 0,
            E = A,
            c = null;
          e: for (;;) {
            for (
              var m;
              E !== n || (i !== 0 && E.nodeType !== 3) || (o = r + i),
                E !== l || (s !== 0 && E.nodeType !== 3) || (a = r + s),
                E.nodeType === 3 && (r += E.nodeValue.length),
                (m = E.firstChild) !== null;
            )
              ((c = E), (E = m));
            for (;;) {
              if (E === A) break e;
              if (
                (c === n && ++g === i && (o = r),
                c === l && ++C === s && (a = r),
                (m = E.nextSibling) !== null)
              )
                break;
              ((E = c), (c = E.parentNode));
            }
            E = m;
          }
          n = o === -1 || a === -1 ? null : { start: o, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (bl = { focusedElem: A, selectionRange: n }, Ls = !1, R = e; R !== null;)
    if (((e = R), (A = e.child), (e.subtreeFlags & 1028) !== 0 && A !== null))
      ((A.return = e), (R = A));
    else
      for (; R !== null;) {
        e = R;
        try {
          var u = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (u !== null) {
                  var Q = u.memoizedProps,
                    h = u.memoizedState,
                    d = e.stateNode,
                    I = d.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? Q : ee(e.type, Q),
                      h,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = I;
                }
                break;
              case 3:
                var w = e.stateNode.containerInfo;
                w.nodeType === 1
                  ? (w.textContent = "")
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(f(163));
            }
        } catch (D) {
          rA(e, e.return, D);
        }
        if (((A = e.sibling), A !== null)) {
          ((A.return = e.return), (R = A));
          break;
        }
        R = e.return;
      }
  return ((u = ho), (ho = !1), u);
}
function xn(A, e, n) {
  var s = e.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var i = (s = s.next);
    do {
      if ((i.tag & A) === A) {
        var l = i.destroy;
        ((i.destroy = void 0), l !== void 0 && Ar(e, n, l));
      }
      i = i.next;
    } while (i !== s);
  }
}
function ji(A, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & A) === A) {
        var s = n.create;
        n.destroy = s();
      }
      n = n.next;
    } while (n !== e);
  }
}
function er(A) {
  var e = A.ref;
  if (e !== null) {
    var n = A.stateNode;
    switch (A.tag) {
      case 5:
        A = n;
        break;
      default:
        A = n;
    }
    typeof e == "function" ? e(A) : (e.current = A);
  }
}
function Vc(A) {
  var e = A.alternate;
  (e !== null && ((A.alternate = null), Vc(e)),
    (A.child = null),
    (A.deletions = null),
    (A.sibling = null),
    A.tag === 5 &&
      ((e = A.stateNode),
      e !== null &&
        (delete e[ge], delete e[Kn], delete e[Fl], delete e[MI], delete e[jI])),
    (A.stateNode = null),
    (A.return = null),
    (A.dependencies = null),
    (A.memoizedProps = null),
    (A.memoizedState = null),
    (A.pendingProps = null),
    (A.stateNode = null),
    (A.updateQueue = null));
}
function Kc(A) {
  return A.tag === 5 || A.tag === 3 || A.tag === 4;
}
function Bo(A) {
  A: for (;;) {
    for (; A.sibling === null;) {
      if (A.return === null || Kc(A.return)) return null;
      A = A.return;
    }
    for (
      A.sibling.return = A.return, A = A.sibling;
      A.tag !== 5 && A.tag !== 6 && A.tag !== 18;
    ) {
      if (A.flags & 2 || A.child === null || A.tag === 4) continue A;
      ((A.child.return = A), (A = A.child));
    }
    if (!(A.flags & 2)) return A.stateNode;
  }
}
function tr(A, e, n) {
  var s = A.tag;
  if (s === 5 || s === 6)
    ((A = A.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(A, e)
          : n.insertBefore(A, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(A, n))
            : ((e = n), e.appendChild(A)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = zs)));
  else if (s !== 4 && ((A = A.child), A !== null))
    for (tr(A, e, n), A = A.sibling; A !== null;)
      (tr(A, e, n), (A = A.sibling));
}
function nr(A, e, n) {
  var s = A.tag;
  if (s === 5 || s === 6)
    ((A = A.stateNode), e ? n.insertBefore(A, e) : n.appendChild(A));
  else if (s !== 4 && ((A = A.child), A !== null))
    for (nr(A, e, n), A = A.sibling; A !== null;)
      (nr(A, e, n), (A = A.sibling));
}
var QA = null,
  te = !1;
function Ne(A, e, n) {
  for (n = n.child; n !== null;) (Lc(A, e, n), (n = n.sibling));
}
function Lc(A, e, n) {
  if (ce && typeof ce.onCommitFiberUnmount == "function")
    try {
      ce.onCommitFiberUnmount(ui, n);
    } catch {}
  switch (n.tag) {
    case 5:
      SA || Wt(n, e);
    case 6:
      var s = QA,
        i = te;
      ((QA = null),
        Ne(A, e, n),
        (QA = s),
        (te = i),
        QA !== null &&
          (te
            ? ((A = QA),
              (n = n.stateNode),
              A.nodeType === 8 ? A.parentNode.removeChild(n) : A.removeChild(n))
            : QA.removeChild(n.stateNode)));
      break;
    case 18:
      QA !== null &&
        (te
          ? ((A = QA),
            (n = n.stateNode),
            A.nodeType === 8
              ? nl(A.parentNode, n)
              : A.nodeType === 1 && nl(A, n),
            Wn(A))
          : nl(QA, n.stateNode));
      break;
    case 4:
      ((s = QA),
        (i = te),
        (QA = n.stateNode.containerInfo),
        (te = !0),
        Ne(A, e, n),
        (QA = s),
        (te = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !SA &&
        ((s = n.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
      ) {
        i = s = s.next;
        do {
          var l = i,
            r = l.destroy;
          ((l = l.tag),
            r !== void 0 && (l & 2 || l & 4) && Ar(n, e, r),
            (i = i.next));
        } while (i !== s);
      }
      Ne(A, e, n);
      break;
    case 1:
      if (
        !SA &&
        (Wt(n, e),
        (s = n.stateNode),
        typeof s.componentWillUnmount == "function")
      )
        try {
          ((s.props = n.memoizedProps),
            (s.state = n.memoizedState),
            s.componentWillUnmount());
        } catch (o) {
          rA(n, e, o);
        }
      Ne(A, e, n);
      break;
    case 21:
      Ne(A, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((SA = (s = SA) || n.memoizedState !== null), Ne(A, e, n), (SA = s))
        : Ne(A, e, n);
      break;
    default:
      Ne(A, e, n);
  }
}
function Qo(A) {
  var e = A.updateQueue;
  if (e !== null) {
    A.updateQueue = null;
    var n = A.stateNode;
    (n === null && (n = A.stateNode = new UI()),
      e.forEach(function (s) {
        var i = HI.bind(null, A, s);
        n.has(s) || (n.add(s), s.then(i, i));
      }));
  }
}
function _A(A, e) {
  var n = e.deletions;
  if (n !== null)
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      try {
        var l = A,
          r = e,
          o = r;
        A: for (; o !== null;) {
          switch (o.tag) {
            case 5:
              ((QA = o.stateNode), (te = !1));
              break A;
            case 3:
              ((QA = o.stateNode.containerInfo), (te = !0));
              break A;
            case 4:
              ((QA = o.stateNode.containerInfo), (te = !0));
              break A;
          }
          o = o.return;
        }
        if (QA === null) throw Error(f(160));
        (Lc(l, r, i), (QA = null), (te = !1));
        var a = i.alternate;
        (a !== null && (a.return = null), (i.return = null));
      } catch (g) {
        rA(i, e, g);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null;) (Pc(e, A), (e = e.sibling));
}
function Pc(A, e) {
  var n = A.alternate,
    s = A.flags;
  switch (A.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((_A(e, A), ae(A), s & 4)) {
        try {
          (xn(3, A, A.return), ji(3, A));
        } catch (Q) {
          rA(A, A.return, Q);
        }
        try {
          xn(5, A, A.return);
        } catch (Q) {
          rA(A, A.return, Q);
        }
      }
      break;
    case 1:
      (_A(e, A), ae(A), s & 512 && n !== null && Wt(n, n.return));
      break;
    case 5:
      if (
        (_A(e, A),
        ae(A),
        s & 512 && n !== null && Wt(n, n.return),
        A.flags & 32)
      ) {
        var i = A.stateNode;
        try {
          vn(i, "");
        } catch (Q) {
          rA(A, A.return, Q);
        }
      }
      if (s & 4 && ((i = A.stateNode), i != null)) {
        var l = A.memoizedProps,
          r = n !== null ? n.memoizedProps : l,
          o = A.type,
          a = A.updateQueue;
        if (((A.updateQueue = null), a !== null))
          try {
            (o === "input" && l.type === "radio" && l.name != null && Ig(i, l),
              kl(o, r));
            var g = kl(o, l);
            for (r = 0; r < a.length; r += 2) {
              var C = a[r],
                E = a[r + 1];
              C === "style"
                ? Qg(i, E)
                : C === "dangerouslySetInnerHTML"
                  ? hg(i, E)
                  : C === "children"
                    ? vn(i, E)
                    : mr(i, C, E, g);
            }
            switch (o) {
              case "input":
                Dl(i, l);
                break;
              case "textarea":
                dg(i, l);
                break;
              case "select":
                var c = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var m = l.value;
                m != null
                  ? Ft(i, !!l.multiple, m, !1)
                  : c !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Ft(i, !!l.multiple, l.defaultValue, !0)
                      : Ft(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[Kn] = l;
          } catch (Q) {
            rA(A, A.return, Q);
          }
      }
      break;
    case 6:
      if ((_A(e, A), ae(A), s & 4)) {
        if (A.stateNode === null) throw Error(f(162));
        ((i = A.stateNode), (l = A.memoizedProps));
        try {
          i.nodeValue = l;
        } catch (Q) {
          rA(A, A.return, Q);
        }
      }
      break;
    case 3:
      if (
        (_A(e, A), ae(A), s & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Wn(e.containerInfo);
        } catch (Q) {
          rA(A, A.return, Q);
        }
      break;
    case 4:
      (_A(e, A), ae(A));
      break;
    case 13:
      (_A(e, A),
        ae(A),
        (i = A.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Aa = oA())),
        s & 4 && Qo(A));
      break;
    case 22:
      if (
        ((C = n !== null && n.memoizedState !== null),
        A.mode & 1 ? ((SA = (g = SA) || C), _A(e, A), (SA = g)) : _A(e, A),
        ae(A),
        s & 8192)
      ) {
        if (
          ((g = A.memoizedState !== null),
          (A.stateNode.isHidden = g) && !C && A.mode & 1)
        )
          for (R = A, C = A.child; C !== null;) {
            for (E = R = C; R !== null;) {
              switch (((c = R), (m = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xn(4, c, c.return);
                  break;
                case 1:
                  Wt(c, c.return);
                  var u = c.stateNode;
                  if (typeof u.componentWillUnmount == "function") {
                    ((s = c), (n = c.return));
                    try {
                      ((e = s),
                        (u.props = e.memoizedProps),
                        (u.state = e.memoizedState),
                        u.componentWillUnmount());
                    } catch (Q) {
                      rA(s, n, Q);
                    }
                  }
                  break;
                case 5:
                  Wt(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    mo(E);
                    continue;
                  }
              }
              m !== null ? ((m.return = c), (R = m)) : mo(E);
            }
            C = C.sibling;
          }
        A: for (C = null, E = A; ;) {
          if (E.tag === 5) {
            if (C === null) {
              C = E;
              try {
                ((i = E.stateNode),
                  g
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((o = E.stateNode),
                      (a = E.memoizedProps.style),
                      (r =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (o.style.display = Bg("display", r))));
              } catch (Q) {
                rA(A, A.return, Q);
              }
            }
          } else if (E.tag === 6) {
            if (C === null)
              try {
                E.stateNode.nodeValue = g ? "" : E.memoizedProps;
              } catch (Q) {
                rA(A, A.return, Q);
              }
          } else if (
            ((E.tag !== 22 && E.tag !== 23) ||
              E.memoizedState === null ||
              E === A) &&
            E.child !== null
          ) {
            ((E.child.return = E), (E = E.child));
            continue;
          }
          if (E === A) break A;
          for (; E.sibling === null;) {
            if (E.return === null || E.return === A) break A;
            (C === E && (C = null), (E = E.return));
          }
          (C === E && (C = null),
            (E.sibling.return = E.return),
            (E = E.sibling));
        }
      }
      break;
    case 19:
      (_A(e, A), ae(A), s & 4 && Qo(A));
      break;
    case 21:
      break;
    default:
      (_A(e, A), ae(A));
  }
}
function ae(A) {
  var e = A.flags;
  if (e & 2) {
    try {
      A: {
        for (var n = A.return; n !== null;) {
          if (Kc(n)) {
            var s = n;
            break A;
          }
          n = n.return;
        }
        throw Error(f(160));
      }
      switch (s.tag) {
        case 5:
          var i = s.stateNode;
          s.flags & 32 && (vn(i, ""), (s.flags &= -33));
          var l = Bo(A);
          nr(A, l, i);
          break;
        case 3:
        case 4:
          var r = s.stateNode.containerInfo,
            o = Bo(A);
          tr(A, o, r);
          break;
        default:
          throw Error(f(161));
      }
    } catch (a) {
      rA(A, A.return, a);
    }
    A.flags &= -3;
  }
  e & 4096 && (A.flags &= -4097);
}
function TI(A, e, n) {
  ((R = A), Oc(A));
}
function Oc(A, e, n) {
  for (var s = (A.mode & 1) !== 0; R !== null;) {
    var i = R,
      l = i.child;
    if (i.tag === 22 && s) {
      var r = i.memoizedState !== null || Ms;
      if (!r) {
        var o = i.alternate,
          a = (o !== null && o.memoizedState !== null) || SA;
        o = Ms;
        var g = SA;
        if (((Ms = r), (SA = a) && !g))
          for (R = i; R !== null;)
            ((r = R),
              (a = r.child),
              r.tag === 22 && r.memoizedState !== null
                ? Do(i)
                : a !== null
                  ? ((a.return = r), (R = a))
                  : Do(i));
        for (; l !== null;) ((R = l), Oc(l), (l = l.sibling));
        ((R = i), (Ms = o), (SA = g));
      }
      wo(A);
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (R = l)) : wo(A);
  }
}
function wo(A) {
  for (; R !== null;) {
    var e = R;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              SA || ji(5, e);
              break;
            case 1:
              var s = e.stateNode;
              if (e.flags & 4 && !SA)
                if (n === null) s.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : ee(e.type, n.memoizedProps);
                  s.componentDidUpdate(
                    i,
                    n.memoizedState,
                    s.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var l = e.updateQueue;
              l !== null && no(e, l, s);
              break;
            case 3:
              var r = e.updateQueue;
              if (r !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                no(e, r, n);
              }
              break;
            case 5:
              var o = e.stateNode;
              if (n === null && e.flags & 4) {
                n = o;
                var a = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var g = e.alternate;
                if (g !== null) {
                  var C = g.memoizedState;
                  if (C !== null) {
                    var E = C.dehydrated;
                    E !== null && Wn(E);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(f(163));
          }
        SA || (e.flags & 512 && er(e));
      } catch (c) {
        rA(e, e.return, c);
      }
    }
    if (e === A) {
      R = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      ((n.return = e.return), (R = n));
      break;
    }
    R = e.return;
  }
}
function mo(A) {
  for (; R !== null;) {
    var e = R;
    if (e === A) {
      R = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      ((n.return = e.return), (R = n));
      break;
    }
    R = e.return;
  }
}
function Do(A) {
  for (; R !== null;) {
    var e = R;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            ji(4, e);
          } catch (a) {
            rA(e, n, a);
          }
          break;
        case 1:
          var s = e.stateNode;
          if (typeof s.componentDidMount == "function") {
            var i = e.return;
            try {
              s.componentDidMount();
            } catch (a) {
              rA(e, i, a);
            }
          }
          var l = e.return;
          try {
            er(e);
          } catch (a) {
            rA(e, l, a);
          }
          break;
        case 5:
          var r = e.return;
          try {
            er(e);
          } catch (a) {
            rA(e, r, a);
          }
      }
    } catch (a) {
      rA(e, e.return, a);
    }
    if (e === A) {
      R = null;
      break;
    }
    var o = e.sibling;
    if (o !== null) {
      ((o.return = e.return), (R = o));
      break;
    }
    R = e.return;
  }
}
var VI = Math.ceil,
  ii = Se.ReactCurrentDispatcher,
  $r = Se.ReactCurrentOwner,
  XA = Se.ReactCurrentBatchConfig,
  V = 0,
  BA = null,
  EA = null,
  wA = 0,
  bA = 0,
  Ut = tt(0),
  dA = 0,
  Hn = null,
  ht = 0,
  pi = 0,
  _r = 0,
  Nn = null,
  GA = null,
  Aa = 0,
  An = 1 / 0,
  Ie = null,
  li = !1,
  sr = null,
  Ke = null,
  js = !1,
  Ye = null,
  ri = 0,
  Zn = 0,
  ir = null,
  Ys = -1,
  bs = 0;
function xA() {
  return V & 6 ? oA() : Ys !== -1 ? Ys : (Ys = oA());
}
function Le(A) {
  return A.mode & 1
    ? V & 2 && wA !== 0
      ? wA & -wA
      : SI.transition !== null
        ? (bs === 0 && (bs = Ng()), bs)
        : ((A = P),
          A !== 0 || ((A = window.event), (A = A === void 0 ? 16 : bg(A.type))),
          A)
    : 1;
}
function ie(A, e, n, s) {
  if (50 < Zn) throw ((Zn = 0), (ir = null), Error(f(185)));
  (es(A, n, s),
    (!(V & 2) || A !== BA) &&
      (A === BA && (!(V & 2) && (pi |= n), dA === 4 && ve(A, wA)),
      YA(A, s),
      n === 1 && V === 0 && !(e.mode & 1) && ((An = oA() + 500), mi && nt())));
}
function YA(A, e) {
  var n = A.callbackNode;
  SC(A, e);
  var s = Ks(A, A === BA ? wA : 0);
  if (s === 0)
    (n !== null && xa(n), (A.callbackNode = null), (A.callbackPriority = 0));
  else if (((e = s & -s), A.callbackPriority !== e)) {
    if ((n != null && xa(n), e === 1))
      (A.tag === 0 ? pI(Mo.bind(null, A)) : nc(Mo.bind(null, A)),
        mI(function () {
          !(V & 6) && nt();
        }),
        (n = null));
    else {
      switch (Zg(s)) {
        case 1:
          n = Sr;
          break;
        case 4:
          n = Jg;
          break;
        case 16:
          n = Vs;
          break;
        case 536870912:
          n = xg;
          break;
        default:
          n = Vs;
      }
      n = eE(n, zc.bind(null, A));
    }
    ((A.callbackPriority = e), (A.callbackNode = n));
  }
}
function zc(A, e) {
  if (((Ys = -1), (bs = 0), V & 6)) throw Error(f(327));
  var n = A.callbackNode;
  if (Pt() && A.callbackNode !== n) return null;
  var s = Ks(A, A === BA ? wA : 0);
  if (s === 0) return null;
  if (s & 30 || s & A.expiredLanes || e) e = ai(A, s);
  else {
    e = s;
    var i = V;
    V |= 2;
    var l = Hc();
    (BA !== A || wA !== e) && ((Ie = null), (An = oA() + 500), ct(A, e));
    do
      try {
        PI();
        break;
      } catch (o) {
        Xc(A, o);
      }
    while (!0);
    (Wr(),
      (ii.current = l),
      (V = i),
      EA !== null ? (e = 0) : ((BA = null), (wA = 0), (e = dA)));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = Zl(A)), i !== 0 && ((s = i), (e = lr(A, i)))), e === 1)
    )
      throw ((n = Hn), ct(A, 0), ve(A, s), YA(A, oA()), n);
    if (e === 6) ve(A, s);
    else {
      if (
        ((i = A.current.alternate),
        !(s & 30) &&
          !KI(i) &&
          ((e = ai(A, s)),
          e === 2 && ((l = Zl(A)), l !== 0 && ((s = l), (e = lr(A, l)))),
          e === 1))
      )
        throw ((n = Hn), ct(A, 0), ve(A, s), YA(A, oA()), n);
      switch (((A.finishedWork = i), (A.finishedLanes = s), e)) {
        case 0:
        case 1:
          throw Error(f(345));
        case 2:
          rt(A, GA, Ie);
          break;
        case 3:
          if (
            (ve(A, s), (s & 130023424) === s && ((e = Aa + 500 - oA()), 10 < e))
          ) {
            if (Ks(A, 0) !== 0) break;
            if (((i = A.suspendedLanes), (i & s) !== s)) {
              (xA(), (A.pingedLanes |= A.suspendedLanes & i));
              break;
            }
            A.timeoutHandle = Ul(rt.bind(null, A, GA, Ie), e);
            break;
          }
          rt(A, GA, Ie);
          break;
        case 4:
          if ((ve(A, s), (s & 4194240) === s)) break;
          for (e = A.eventTimes, i = -1; 0 < s;) {
            var r = 31 - se(s);
            ((l = 1 << r), (r = e[r]), r > i && (i = r), (s &= ~l));
          }
          if (
            ((s = i),
            (s = oA() - s),
            (s =
              (120 > s
                ? 120
                : 480 > s
                  ? 480
                  : 1080 > s
                    ? 1080
                    : 1920 > s
                      ? 1920
                      : 3e3 > s
                        ? 3e3
                        : 4320 > s
                          ? 4320
                          : 1960 * VI(s / 1960)) - s),
            10 < s)
          ) {
            A.timeoutHandle = Ul(rt.bind(null, A, GA, Ie), s);
            break;
          }
          rt(A, GA, Ie);
          break;
        case 5:
          rt(A, GA, Ie);
          break;
        default:
          throw Error(f(329));
      }
    }
  }
  return (YA(A, oA()), A.callbackNode === n ? zc.bind(null, A) : null);
}
function lr(A, e) {
  var n = Nn;
  return (
    A.current.memoizedState.isDehydrated && (ct(A, e).flags |= 256),
    (A = ai(A, e)),
    A !== 2 && ((e = GA), (GA = n), e !== null && rr(e)),
    A
  );
}
function rr(A) {
  GA === null ? (GA = A) : GA.push.apply(GA, A);
}
function KI(A) {
  for (var e = A; ;) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var s = 0; s < n.length; s++) {
          var i = n[s],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!le(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      ((n.return = e), (e = n));
    else {
      if (e === A) break;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === A) return !0;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
  }
  return !0;
}
function ve(A, e) {
  for (
    e &= ~_r,
      e &= ~pi,
      A.suspendedLanes |= e,
      A.pingedLanes &= ~e,
      A = A.expirationTimes;
    0 < e;
  ) {
    var n = 31 - se(e),
      s = 1 << n;
    ((A[n] = -1), (e &= ~s));
  }
}
function Mo(A) {
  if (V & 6) throw Error(f(327));
  Pt();
  var e = Ks(A, 0);
  if (!(e & 1)) return (YA(A, oA()), null);
  var n = ai(A, e);
  if (A.tag !== 0 && n === 2) {
    var s = Zl(A);
    s !== 0 && ((e = s), (n = lr(A, s)));
  }
  if (n === 1) throw ((n = Hn), ct(A, 0), ve(A, e), YA(A, oA()), n);
  if (n === 6) throw Error(f(345));
  return (
    (A.finishedWork = A.current.alternate),
    (A.finishedLanes = e),
    rt(A, GA, Ie),
    YA(A, oA()),
    null
  );
}
function ea(A, e) {
  var n = V;
  V |= 1;
  try {
    return A(e);
  } finally {
    ((V = n), V === 0 && ((An = oA() + 500), mi && nt()));
  }
}
function Bt(A) {
  Ye !== null && Ye.tag === 0 && !(V & 6) && Pt();
  var e = V;
  V |= 1;
  var n = XA.transition,
    s = P;
  try {
    if (((XA.transition = null), (P = 1), A)) return A();
  } finally {
    ((P = s), (XA.transition = n), (V = e), !(V & 6) && nt());
  }
}
function ta() {
  ((bA = Ut.current), $(Ut));
}
function ct(A, e) {
  ((A.finishedWork = null), (A.finishedLanes = 0));
  var n = A.timeoutHandle;
  if ((n !== -1 && ((A.timeoutHandle = -1), wI(n)), EA !== null))
    for (n = EA.return; n !== null;) {
      var s = n;
      switch ((Rr(s), s.tag)) {
        case 1:
          ((s = s.type.childContextTypes), s != null && Xs());
          break;
        case 3:
          ($t(), $(vA), $(kA), Lr());
          break;
        case 5:
          Kr(s);
          break;
        case 4:
          $t();
          break;
        case 13:
          $(nA);
          break;
        case 19:
          $(nA);
          break;
        case 10:
          Ur(s.type._context);
          break;
        case 22:
        case 23:
          ta();
      }
      n = n.return;
    }
  if (
    ((BA = A),
    (EA = A = Pe(A.current, null)),
    (wA = bA = e),
    (dA = 0),
    (Hn = null),
    (_r = pi = ht = 0),
    (GA = Nn = null),
    ot !== null)
  ) {
    for (e = 0; e < ot.length; e++)
      if (((n = ot[e]), (s = n.interleaved), s !== null)) {
        n.interleaved = null;
        var i = s.next,
          l = n.pending;
        if (l !== null) {
          var r = l.next;
          ((l.next = i), (s.next = r));
        }
        n.pending = s;
      }
    ot = null;
  }
  return A;
}
function Xc(A, e) {
  do {
    var n = EA;
    try {
      if ((Wr(), (ys.current = si), ni)) {
        for (var s = sA.memoizedState; s !== null;) {
          var i = s.queue;
          (i !== null && (i.pending = null), (s = s.next));
        }
        ni = !1;
      }
      if (
        ((ut = 0),
        (hA = IA = sA = null),
        (Jn = !1),
        (On = 0),
        ($r.current = null),
        n === null || n.return === null)
      ) {
        ((dA = 1), (Hn = e), (EA = null));
        break;
      }
      A: {
        var l = A,
          r = n.return,
          o = n,
          a = e;
        if (
          ((e = wA),
          (o.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var g = a,
            C = o,
            E = C.tag;
          if (!(C.mode & 1) && (E === 0 || E === 11 || E === 15)) {
            var c = C.alternate;
            c
              ? ((C.updateQueue = c.updateQueue),
                (C.memoizedState = c.memoizedState),
                (C.lanes = c.lanes))
              : ((C.updateQueue = null), (C.memoizedState = null));
          }
          var m = oo(r);
          if (m !== null) {
            ((m.flags &= -257),
              go(m, r, o, l, e),
              m.mode & 1 && ao(l, g, e),
              (e = m),
              (a = g));
            var u = e.updateQueue;
            if (u === null) {
              var Q = new Set();
              (Q.add(a), (e.updateQueue = Q));
            } else u.add(a);
            break A;
          } else {
            if (!(e & 1)) {
              (ao(l, g, e), na());
              break A;
            }
            a = Error(f(426));
          }
        } else if (tA && o.mode & 1) {
          var h = oo(r);
          if (h !== null) {
            (!(h.flags & 65536) && (h.flags |= 256),
              go(h, r, o, l, e),
              Yr(_t(a, o)));
            break A;
          }
        }
        ((l = a = _t(a, o)),
          dA !== 4 && (dA = 2),
          Nn === null ? (Nn = [l]) : Nn.push(l),
          (l = r));
        do {
          switch (l.tag) {
            case 3:
              ((l.flags |= 65536), (e &= -e), (l.lanes |= e));
              var d = Zc(l, a, e);
              to(l, d);
              break A;
            case 1:
              o = a;
              var I = l.type,
                w = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof I.getDerivedStateFromError == "function" ||
                  (w !== null &&
                    typeof w.componentDidCatch == "function" &&
                    (Ke === null || !Ke.has(w))))
              ) {
                ((l.flags |= 65536), (e &= -e), (l.lanes |= e));
                var D = Gc(l, o, e);
                to(l, D);
                break A;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      $c(n);
    } catch (j) {
      ((e = j), EA === n && n !== null && (EA = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Hc() {
  var A = ii.current;
  return ((ii.current = si), A === null ? si : A);
}
function na() {
  ((dA === 0 || dA === 3 || dA === 2) && (dA = 4),
    BA === null || (!(ht & 268435455) && !(pi & 268435455)) || ve(BA, wA));
}
function ai(A, e) {
  var n = V;
  V |= 2;
  var s = Hc();
  (BA !== A || wA !== e) && ((Ie = null), ct(A, e));
  do
    try {
      LI();
      break;
    } catch (i) {
      Xc(A, i);
    }
  while (!0);
  if ((Wr(), (V = n), (ii.current = s), EA !== null)) throw Error(f(261));
  return ((BA = null), (wA = 0), dA);
}
function LI() {
  for (; EA !== null;) qc(EA);
}
function PI() {
  for (; EA !== null && !hC();) qc(EA);
}
function qc(A) {
  var e = AE(A.alternate, A, bA);
  ((A.memoizedProps = A.pendingProps),
    e === null ? $c(A) : (EA = e),
    ($r.current = null));
}
function $c(A) {
  var e = A;
  do {
    var n = e.alternate;
    if (((A = e.return), e.flags & 32768)) {
      if (((n = WI(n, e)), n !== null)) {
        ((n.flags &= 32767), (EA = n));
        return;
      }
      if (A !== null)
        ((A.flags |= 32768), (A.subtreeFlags = 0), (A.deletions = null));
      else {
        ((dA = 6), (EA = null));
        return;
      }
    } else if (((n = bI(n, e, bA)), n !== null)) {
      EA = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      EA = e;
      return;
    }
    EA = e = A;
  } while (e !== null);
  dA === 0 && (dA = 5);
}
function rt(A, e, n) {
  var s = P,
    i = XA.transition;
  try {
    ((XA.transition = null), (P = 1), OI(A, e, n, s));
  } finally {
    ((XA.transition = i), (P = s));
  }
  return null;
}
function OI(A, e, n, s) {
  do Pt();
  while (Ye !== null);
  if (V & 6) throw Error(f(327));
  n = A.finishedWork;
  var i = A.finishedLanes;
  if (n === null) return null;
  if (((A.finishedWork = null), (A.finishedLanes = 0), n === A.current))
    throw Error(f(177));
  ((A.callbackNode = null), (A.callbackPriority = 0));
  var l = n.lanes | n.childLanes;
  if (
    (kC(A, l),
    A === BA && ((EA = BA = null), (wA = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      js ||
      ((js = !0),
      eE(Vs, function () {
        return (Pt(), null);
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    ((l = XA.transition), (XA.transition = null));
    var r = P;
    P = 1;
    var o = V;
    ((V |= 4),
      ($r.current = null),
      FI(A, n),
      Pc(n, A),
      CI(bl),
      (Ls = !!Yl),
      (bl = Yl = null),
      (A.current = n),
      TI(n),
      BC(),
      (V = o),
      (P = r),
      (XA.transition = l));
  } else A.current = n;
  if (
    (js && ((js = !1), (Ye = A), (ri = i)),
    (l = A.pendingLanes),
    l === 0 && (Ke = null),
    mC(n.stateNode),
    YA(A, oA()),
    e !== null)
  )
    for (s = A.onRecoverableError, n = 0; n < e.length; n++)
      ((i = e[n]), s(i.value, { componentStack: i.stack, digest: i.digest }));
  if (li) throw ((li = !1), (A = sr), (sr = null), A);
  return (
    ri & 1 && A.tag !== 0 && Pt(),
    (l = A.pendingLanes),
    l & 1 ? (A === ir ? Zn++ : ((Zn = 0), (ir = A))) : (Zn = 0),
    nt(),
    null
  );
}
function Pt() {
  if (Ye !== null) {
    var A = Zg(ri),
      e = XA.transition,
      n = P;
    try {
      if (((XA.transition = null), (P = 16 > A ? 16 : A), Ye === null))
        var s = !1;
      else {
        if (((A = Ye), (Ye = null), (ri = 0), V & 6)) throw Error(f(331));
        var i = V;
        for (V |= 4, R = A.current; R !== null;) {
          var l = R,
            r = l.child;
          if (R.flags & 16) {
            var o = l.deletions;
            if (o !== null) {
              for (var a = 0; a < o.length; a++) {
                var g = o[a];
                for (R = g; R !== null;) {
                  var C = R;
                  switch (C.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xn(8, C, l);
                  }
                  var E = C.child;
                  if (E !== null) ((E.return = C), (R = E));
                  else
                    for (; R !== null;) {
                      C = R;
                      var c = C.sibling,
                        m = C.return;
                      if ((Vc(C), C === g)) {
                        R = null;
                        break;
                      }
                      if (c !== null) {
                        ((c.return = m), (R = c));
                        break;
                      }
                      R = m;
                    }
                }
              }
              var u = l.alternate;
              if (u !== null) {
                var Q = u.child;
                if (Q !== null) {
                  u.child = null;
                  do {
                    var h = Q.sibling;
                    ((Q.sibling = null), (Q = h));
                  } while (Q !== null);
                }
              }
              R = l;
            }
          }
          if (l.subtreeFlags & 2064 && r !== null) ((r.return = l), (R = r));
          else
            A: for (; R !== null;) {
              if (((l = R), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xn(9, l, l.return);
                }
              var d = l.sibling;
              if (d !== null) {
                ((d.return = l.return), (R = d));
                break A;
              }
              R = l.return;
            }
        }
        var I = A.current;
        for (R = I; R !== null;) {
          r = R;
          var w = r.child;
          if (r.subtreeFlags & 2064 && w !== null) ((w.return = r), (R = w));
          else
            A: for (r = I; R !== null;) {
              if (((o = R), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ji(9, o);
                  }
                } catch (j) {
                  rA(o, o.return, j);
                }
              if (o === r) {
                R = null;
                break A;
              }
              var D = o.sibling;
              if (D !== null) {
                ((D.return = o.return), (R = D));
                break A;
              }
              R = o.return;
            }
        }
        if (
          ((V = i), nt(), ce && typeof ce.onPostCommitFiberRoot == "function")
        )
          try {
            ce.onPostCommitFiberRoot(ui, A);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      ((P = n), (XA.transition = e));
    }
  }
  return !1;
}
function jo(A, e, n) {
  ((e = _t(n, e)),
    (e = Zc(A, e, 1)),
    (A = Ve(A, e, 1)),
    (e = xA()),
    A !== null && (es(A, 1, e), YA(A, e)));
}
function rA(A, e, n) {
  if (A.tag === 3) jo(A, A, n);
  else
    for (; e !== null;) {
      if (e.tag === 3) {
        jo(e, A, n);
        break;
      } else if (e.tag === 1) {
        var s = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof s.componentDidCatch == "function" &&
            (Ke === null || !Ke.has(s)))
        ) {
          ((A = _t(n, A)),
            (A = Gc(e, A, 1)),
            (e = Ve(e, A, 1)),
            (A = xA()),
            e !== null && (es(e, 1, A), YA(e, A)));
          break;
        }
      }
      e = e.return;
    }
}
function zI(A, e, n) {
  var s = A.pingCache;
  (s !== null && s.delete(e),
    (e = xA()),
    (A.pingedLanes |= A.suspendedLanes & n),
    BA === A &&
      (wA & n) === n &&
      (dA === 4 || (dA === 3 && (wA & 130023424) === wA && 500 > oA() - Aa)
        ? ct(A, 0)
        : (_r |= n)),
    YA(A, e));
}
function _c(A, e) {
  e === 0 &&
    (A.mode & 1
      ? ((e = Is), (Is <<= 1), !(Is & 130023424) && (Is = 4194304))
      : (e = 1));
  var n = xA();
  ((A = De(A, e)), A !== null && (es(A, e, n), YA(A, n)));
}
function XI(A) {
  var e = A.memoizedState,
    n = 0;
  (e !== null && (n = e.retryLane), _c(A, n));
}
function HI(A, e) {
  var n = 0;
  switch (A.tag) {
    case 13:
      var s = A.stateNode,
        i = A.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      s = A.stateNode;
      break;
    default:
      throw Error(f(314));
  }
  (s !== null && s.delete(e), _c(A, n));
}
var AE;
AE = function (A, e, n) {
  if (A !== null)
    if (A.memoizedProps !== e.pendingProps || vA.current) yA = !0;
    else {
      if (!(A.lanes & n) && !(e.flags & 128)) return ((yA = !1), YI(A, e, n));
      yA = !!(A.flags & 131072);
    }
  else ((yA = !1), tA && e.flags & 1048576 && sc(e, $s, e.index));
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var s = e.type;
      (Rs(A, e), (A = e.pendingProps));
      var i = Xt(e, kA.current);
      (Lt(e, n), (i = Or(null, e, s, A, i, n)));
      var l = zr();
      return (
        (e.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            RA(s) ? ((l = !0), Hs(e)) : (l = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Tr(e),
            (i.updater = Mi),
            (e.stateNode = i),
            (i._reactInternals = e),
            Ol(e, s, A, n),
            (e = Hl(null, e, s, !0, l, n)))
          : ((e.tag = 0), tA && l && vr(e), fA(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      s = e.elementType;
      A: {
        switch (
          (Rs(A, e),
          (A = e.pendingProps),
          (i = s._init),
          (s = i(s._payload)),
          (e.type = s),
          (i = e.tag = $I(s)),
          (A = ee(s, A)),
          i)
        ) {
          case 0:
            e = Xl(null, e, s, A, n);
            break A;
          case 1:
            e = Co(null, e, s, A, n);
            break A;
          case 11:
            e = co(null, e, s, A, n);
            break A;
          case 14:
            e = Eo(null, e, s, ee(s.type, A), n);
            break A;
        }
        throw Error(f(306, s, ""));
      }
      return e;
    case 0:
      return (
        (s = e.type),
        (i = e.pendingProps),
        (i = e.elementType === s ? i : ee(s, i)),
        Xl(A, e, s, i, n)
      );
    case 1:
      return (
        (s = e.type),
        (i = e.pendingProps),
        (i = e.elementType === s ? i : ee(s, i)),
        Co(A, e, s, i, n)
      );
    case 3:
      A: {
        if ((Yc(e), A === null)) throw Error(f(387));
        ((s = e.pendingProps),
          (l = e.memoizedState),
          (i = l.element),
          gc(A, e),
          ei(e, s, null, n));
        var r = e.memoizedState;
        if (((s = r.element), l.isDehydrated))
          if (
            ((l = {
              element: s,
              isDehydrated: !1,
              cache: r.cache,
              pendingSuspenseBoundaries: r.pendingSuspenseBoundaries,
              transitions: r.transitions,
            }),
            (e.updateQueue.baseState = l),
            (e.memoizedState = l),
            e.flags & 256)
          ) {
            ((i = _t(Error(f(423)), e)), (e = Io(A, e, s, n, i)));
            break A;
          } else if (s !== i) {
            ((i = _t(Error(f(424)), e)), (e = Io(A, e, s, n, i)));
            break A;
          } else
            for (
              WA = Te(e.stateNode.containerInfo.firstChild),
                UA = e,
                tA = !0,
                ne = null,
                n = ac(e, null, s, n),
                e.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Ht(), s === i)) {
            e = Me(A, e, n);
            break A;
          }
          fA(A, e, s, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        cc(e),
        A === null && Kl(e),
        (s = e.type),
        (i = e.pendingProps),
        (l = A !== null ? A.memoizedProps : null),
        (r = i.children),
        Wl(s, i) ? (r = null) : l !== null && Wl(s, l) && (e.flags |= 32),
        Rc(A, e),
        fA(A, e, r, n),
        e.child
      );
    case 6:
      return (A === null && Kl(e), null);
    case 13:
      return bc(A, e, n);
    case 4:
      return (
        Vr(e, e.stateNode.containerInfo),
        (s = e.pendingProps),
        A === null ? (e.child = qt(e, null, s, n)) : fA(A, e, s, n),
        e.child
      );
    case 11:
      return (
        (s = e.type),
        (i = e.pendingProps),
        (i = e.elementType === s ? i : ee(s, i)),
        co(A, e, s, i, n)
      );
    case 7:
      return (fA(A, e, e.pendingProps, n), e.child);
    case 8:
      return (fA(A, e, e.pendingProps.children, n), e.child);
    case 12:
      return (fA(A, e, e.pendingProps.children, n), e.child);
    case 10:
      A: {
        if (
          ((s = e.type._context),
          (i = e.pendingProps),
          (l = e.memoizedProps),
          (r = i.value),
          X(_s, s._currentValue),
          (s._currentValue = r),
          l !== null)
        )
          if (le(l.value, r)) {
            if (l.children === i.children && !vA.current) {
              e = Me(A, e, n);
              break A;
            }
          } else
            for (l = e.child, l !== null && (l.return = e); l !== null;) {
              var o = l.dependencies;
              if (o !== null) {
                r = l.child;
                for (var a = o.firstContext; a !== null;) {
                  if (a.context === s) {
                    if (l.tag === 1) {
                      ((a = Qe(-1, n & -n)), (a.tag = 2));
                      var g = l.updateQueue;
                      if (g !== null) {
                        g = g.shared;
                        var C = g.pending;
                        (C === null
                          ? (a.next = a)
                          : ((a.next = C.next), (C.next = a)),
                          (g.pending = a));
                      }
                    }
                    ((l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      Ll(l.return, n, e),
                      (o.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) r = l.type === e.type ? null : l.child;
              else if (l.tag === 18) {
                if (((r = l.return), r === null)) throw Error(f(341));
                ((r.lanes |= n),
                  (o = r.alternate),
                  o !== null && (o.lanes |= n),
                  Ll(r, n, e),
                  (r = l.sibling));
              } else r = l.child;
              if (r !== null) r.return = l;
              else
                for (r = l; r !== null;) {
                  if (r === e) {
                    r = null;
                    break;
                  }
                  if (((l = r.sibling), l !== null)) {
                    ((l.return = r.return), (r = l));
                    break;
                  }
                  r = r.return;
                }
              l = r;
            }
        (fA(A, e, i.children, n), (e = e.child));
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (s = e.pendingProps.children),
        Lt(e, n),
        (i = HA(i)),
        (s = s(i)),
        (e.flags |= 1),
        fA(A, e, s, n),
        e.child
      );
    case 14:
      return (
        (s = e.type),
        (i = ee(s, e.pendingProps)),
        (i = ee(s.type, i)),
        Eo(A, e, s, i, n)
      );
    case 15:
      return yc(A, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (s = e.type),
        (i = e.pendingProps),
        (i = e.elementType === s ? i : ee(s, i)),
        Rs(A, e),
        (e.tag = 1),
        RA(s) ? ((A = !0), Hs(e)) : (A = !1),
        Lt(e, n),
        Nc(e, s, i),
        Ol(e, s, i, n),
        Hl(null, e, s, !0, A, n)
      );
    case 19:
      return Wc(A, e, n);
    case 22:
      return vc(A, e, n);
  }
  throw Error(f(156, e.tag));
};
function eE(A, e) {
  return fg(A, e);
}
function qI(A, e, n, s) {
  ((this.tag = A),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = s),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function zA(A, e, n, s) {
  return new qI(A, e, n, s);
}
function sa(A) {
  return ((A = A.prototype), !(!A || !A.isReactComponent));
}
function $I(A) {
  if (typeof A == "function") return sa(A) ? 1 : 0;
  if (A != null) {
    if (((A = A.$$typeof), A === Mr)) return 11;
    if (A === jr) return 14;
  }
  return 2;
}
function Pe(A, e) {
  var n = A.alternate;
  return (
    n === null
      ? ((n = zA(A.tag, e, A.key, A.mode)),
        (n.elementType = A.elementType),
        (n.type = A.type),
        (n.stateNode = A.stateNode),
        (n.alternate = A),
        (A.alternate = n))
      : ((n.pendingProps = e),
        (n.type = A.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = A.flags & 14680064),
    (n.childLanes = A.childLanes),
    (n.lanes = A.lanes),
    (n.child = A.child),
    (n.memoizedProps = A.memoizedProps),
    (n.memoizedState = A.memoizedState),
    (n.updateQueue = A.updateQueue),
    (e = A.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = A.sibling),
    (n.index = A.index),
    (n.ref = A.ref),
    n
  );
}
function Ws(A, e, n, s, i, l) {
  var r = 2;
  if (((s = A), typeof A == "function")) sa(A) && (r = 1);
  else if (typeof A == "string") r = 5;
  else
    A: switch (A) {
      case xt:
        return Et(n.children, i, l, e);
      case Dr:
        ((r = 8), (i |= 8));
        break;
      case hl:
        return (
          (A = zA(12, n, e, i | 2)),
          (A.elementType = hl),
          (A.lanes = l),
          A
        );
      case Bl:
        return ((A = zA(13, n, e, i)), (A.elementType = Bl), (A.lanes = l), A);
      case Ql:
        return ((A = zA(19, n, e, i)), (A.elementType = Ql), (A.lanes = l), A);
      case cg:
        return Si(n, i, l, e);
      default:
        if (typeof A == "object" && A !== null)
          switch (A.$$typeof) {
            case og:
              r = 10;
              break A;
            case gg:
              r = 9;
              break A;
            case Mr:
              r = 11;
              break A;
            case jr:
              r = 14;
              break A;
            case Ze:
              ((r = 16), (s = null));
              break A;
          }
        throw Error(f(130, A == null ? A : typeof A, ""));
    }
  return (
    (e = zA(r, n, e, i)),
    (e.elementType = A),
    (e.type = s),
    (e.lanes = l),
    e
  );
}
function Et(A, e, n, s) {
  return ((A = zA(7, A, s, e)), (A.lanes = n), A);
}
function Si(A, e, n, s) {
  return (
    (A = zA(22, A, s, e)),
    (A.elementType = cg),
    (A.lanes = n),
    (A.stateNode = { isHidden: !1 }),
    A
  );
}
function cl(A, e, n) {
  return ((A = zA(6, A, null, e)), (A.lanes = n), A);
}
function El(A, e, n) {
  return (
    (e = zA(4, A.children !== null ? A.children : [], A.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: A.containerInfo,
      pendingChildren: null,
      implementation: A.implementation,
    }),
    e
  );
}
function _I(A, e, n, s, i) {
  ((this.tag = e),
    (this.containerInfo = A),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Pi(0)),
    (this.expirationTimes = Pi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Pi(0)),
    (this.identifierPrefix = s),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function ia(A, e, n, s, i, l, r, o, a) {
  return (
    (A = new _I(A, e, n, o, a)),
    e === 1 ? ((e = 1), l === !0 && (e |= 8)) : (e = 0),
    (l = zA(3, null, null, e)),
    (A.current = l),
    (l.stateNode = A),
    (l.memoizedState = {
      element: s,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Tr(l),
    A
  );
}
function Ad(A, e, n) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Jt,
    key: s == null ? null : "" + s,
    children: A,
    containerInfo: e,
    implementation: n,
  };
}
function tE(A) {
  if (!A) return He;
  A = A._reactInternals;
  A: {
    if (mt(A) !== A || A.tag !== 1) throw Error(f(170));
    var e = A;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break A;
        case 1:
          if (RA(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break A;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(f(171));
  }
  if (A.tag === 1) {
    var n = A.type;
    if (RA(n)) return tc(A, n, e);
  }
  return e;
}
function nE(A, e, n, s, i, l, r, o, a) {
  return (
    (A = ia(n, s, !0, A, i, l, r, o, a)),
    (A.context = tE(null)),
    (n = A.current),
    (s = xA()),
    (i = Le(n)),
    (l = Qe(s, i)),
    (l.callback = e ?? null),
    Ve(n, l, i),
    (A.current.lanes = i),
    es(A, i, s),
    YA(A, s),
    A
  );
}
function ki(A, e, n, s) {
  var i = e.current,
    l = xA(),
    r = Le(i);
  return (
    (n = tE(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = Qe(l, r)),
    (e.payload = { element: A }),
    (s = s === void 0 ? null : s),
    s !== null && (e.callback = s),
    (A = Ve(i, e, r)),
    A !== null && (ie(A, i, r, l), Gs(A, i, r)),
    r
  );
}
function oi(A) {
  if (((A = A.current), !A.child)) return null;
  switch (A.child.tag) {
    case 5:
      return A.child.stateNode;
    default:
      return A.child.stateNode;
  }
}
function po(A, e) {
  if (((A = A.memoizedState), A !== null && A.dehydrated !== null)) {
    var n = A.retryLane;
    A.retryLane = n !== 0 && n < e ? n : e;
  }
}
function la(A, e) {
  (po(A, e), (A = A.alternate) && po(A, e));
}
function ed() {
  return null;
}
var sE =
  typeof reportError == "function"
    ? reportError
    : function (A) {
        console.error(A);
      };
function ra(A) {
  this._internalRoot = A;
}
fi.prototype.render = ra.prototype.render = function (A) {
  var e = this._internalRoot;
  if (e === null) throw Error(f(409));
  ki(A, e, null, null);
};
fi.prototype.unmount = ra.prototype.unmount = function () {
  var A = this._internalRoot;
  if (A !== null) {
    this._internalRoot = null;
    var e = A.containerInfo;
    (Bt(function () {
      ki(null, A, null, null);
    }),
      (e[me] = null));
  }
};
function fi(A) {
  this._internalRoot = A;
}
fi.prototype.unstable_scheduleHydration = function (A) {
  if (A) {
    var e = vg();
    A = { blockedOn: null, target: A, priority: e };
    for (var n = 0; n < ye.length && e !== 0 && e < ye[n].priority; n++);
    (ye.splice(n, 0, A), n === 0 && Yg(A));
  }
};
function aa(A) {
  return !(!A || (A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11));
}
function Ji(A) {
  return !(
    !A ||
    (A.nodeType !== 1 &&
      A.nodeType !== 9 &&
      A.nodeType !== 11 &&
      (A.nodeType !== 8 || A.nodeValue !== " react-mount-point-unstable "))
  );
}
function So() {}
function td(A, e, n, s, i) {
  if (i) {
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var g = oi(r);
        l.call(g);
      };
    }
    var r = nE(e, s, A, 0, null, !1, !1, "", So);
    return (
      (A._reactRootContainer = r),
      (A[me] = r.current),
      Tn(A.nodeType === 8 ? A.parentNode : A),
      Bt(),
      r
    );
  }
  for (; (i = A.lastChild);) A.removeChild(i);
  if (typeof s == "function") {
    var o = s;
    s = function () {
      var g = oi(a);
      o.call(g);
    };
  }
  var a = ia(A, 0, !1, null, null, !1, !1, "", So);
  return (
    (A._reactRootContainer = a),
    (A[me] = a.current),
    Tn(A.nodeType === 8 ? A.parentNode : A),
    Bt(function () {
      ki(e, a, n, s);
    }),
    a
  );
}
function xi(A, e, n, s, i) {
  var l = n._reactRootContainer;
  if (l) {
    var r = l;
    if (typeof i == "function") {
      var o = i;
      i = function () {
        var a = oi(r);
        o.call(a);
      };
    }
    ki(e, r, A, i);
  } else r = td(n, e, A, i, s);
  return oi(r);
}
Gg = function (A) {
  switch (A.tag) {
    case 3:
      var e = A.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = Dn(e.pendingLanes);
        n !== 0 &&
          (kr(e, n | 1), YA(e, oA()), !(V & 6) && ((An = oA() + 500), nt()));
      }
      break;
    case 13:
      (Bt(function () {
        var s = De(A, 1);
        if (s !== null) {
          var i = xA();
          ie(s, A, 1, i);
        }
      }),
        la(A, 1));
  }
};
fr = function (A) {
  if (A.tag === 13) {
    var e = De(A, 134217728);
    if (e !== null) {
      var n = xA();
      ie(e, A, 134217728, n);
    }
    la(A, 134217728);
  }
};
yg = function (A) {
  if (A.tag === 13) {
    var e = Le(A),
      n = De(A, e);
    if (n !== null) {
      var s = xA();
      ie(n, A, e, s);
    }
    la(A, e);
  }
};
vg = function () {
  return P;
};
Rg = function (A, e) {
  var n = P;
  try {
    return ((P = A), e());
  } finally {
    P = n;
  }
};
Jl = function (A, e, n) {
  switch (e) {
    case "input":
      if ((Dl(A, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = A; n.parentNode;) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]',
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var s = n[e];
          if (s !== A && s.form === A.form) {
            var i = wi(s);
            if (!i) throw Error(f(90));
            (Cg(s), Dl(s, i));
          }
        }
      }
      break;
    case "textarea":
      dg(A, n);
      break;
    case "select":
      ((e = n.value), e != null && Ft(A, !!n.multiple, e, !1));
  }
};
Dg = ea;
Mg = Bt;
var nd = { usingClientEntryPoint: !1, Events: [ns, yt, wi, wg, mg, ea] },
  Bn = {
    findFiberByHostInstance: at,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  sd = {
    bundleType: Bn.bundleType,
    version: Bn.version,
    rendererPackageName: Bn.rendererPackageName,
    rendererConfig: Bn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Se.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (A) {
      return ((A = Sg(A)), A === null ? null : A.stateNode);
    },
    findFiberByHostInstance: Bn.findFiberByHostInstance || ed,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ps.isDisabled && ps.supportsFiber)
    try {
      ((ui = ps.inject(sd)), (ce = ps));
    } catch {}
}
VA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nd;
VA.createPortal = function (A, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!aa(e)) throw Error(f(200));
  return Ad(A, e, null, n);
};
VA.createRoot = function (A, e) {
  if (!aa(A)) throw Error(f(299));
  var n = !1,
    s = "",
    i = sE;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (s = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = ia(A, 1, !1, null, null, n, !1, s, i)),
    (A[me] = e.current),
    Tn(A.nodeType === 8 ? A.parentNode : A),
    new ra(e)
  );
};
VA.findDOMNode = function (A) {
  if (A == null) return null;
  if (A.nodeType === 1) return A;
  var e = A._reactInternals;
  if (e === void 0)
    throw typeof A.render == "function"
      ? Error(f(188))
      : ((A = Object.keys(A).join(",")), Error(f(268, A)));
  return ((A = Sg(e)), (A = A === null ? null : A.stateNode), A);
};
VA.flushSync = function (A) {
  return Bt(A);
};
VA.hydrate = function (A, e, n) {
  if (!Ji(e)) throw Error(f(200));
  return xi(null, A, e, !0, n);
};
VA.hydrateRoot = function (A, e, n) {
  if (!aa(A)) throw Error(f(405));
  var s = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    r = sE;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (r = n.onRecoverableError)),
    (e = nE(e, null, A, 1, n ?? null, i, !1, l, r)),
    (A[me] = e.current),
    Tn(A),
    s)
  )
    for (A = 0; A < s.length; A++)
      ((n = s[A]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i));
  return new fi(e);
};
VA.render = function (A, e, n) {
  if (!Ji(e)) throw Error(f(200));
  return xi(null, A, e, !1, n);
};
VA.unmountComponentAtNode = function (A) {
  if (!Ji(A)) throw Error(f(40));
  return A._reactRootContainer
    ? (Bt(function () {
        xi(null, null, A, !1, function () {
          ((A._reactRootContainer = null), (A[me] = null));
        });
      }),
      !0)
    : !1;
};
VA.unstable_batchedUpdates = ea;
VA.unstable_renderSubtreeIntoContainer = function (A, e, n, s) {
  if (!Ji(n)) throw Error(f(200));
  if (A == null || A._reactInternals === void 0) throw Error(f(38));
  return xi(A, e, n, !1, s);
};
VA.version = "18.3.1-next-f1338f8080-20240426";
function iE() {
  if (!(
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
  ))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iE);
    } catch (A) {
      console.error(A);
    }
}
(iE(), (ig.exports = VA));
var id = ig.exports,
  lE,
  ko = id;
((lE = ko.createRoot), ko.hydrateRoot);
/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function qn() {
  return (
    (qn = Object.assign
      ? Object.assign.bind()
      : function (A) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var s in n) ({}).hasOwnProperty.call(n, s) && (A[s] = n[s]);
          }
          return A;
        }),
    qn.apply(null, arguments)
  );
}
var be;
(function (A) {
  ((A.Pop = "POP"), (A.Push = "PUSH"), (A.Replace = "REPLACE"));
})(be || (be = {}));
const fo = "popstate";
function ld(A) {
  A === void 0 && (A = {});
  function e(i, l) {
    let {
      pathname: r = "/",
      search: o = "",
      hash: a = "",
    } = Dt(i.location.hash.substr(1));
    return (
      !r.startsWith("/") && !r.startsWith(".") && (r = "/" + r),
      ar(
        "",
        { pathname: r, search: o, hash: a },
        (l.state && l.state.usr) || null,
        (l.state && l.state.key) || "default",
      )
    );
  }
  function n(i, l) {
    let r = i.document.querySelector("base"),
      o = "";
    if (r && r.getAttribute("href")) {
      let a = i.location.href,
        g = a.indexOf("#");
      o = g === -1 ? a : a.slice(0, g);
    }
    return o + "#" + (typeof l == "string" ? l : gi(l));
  }
  function s(i, l) {
    oa(
      i.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(l) +
        ")",
    );
  }
  return ad(e, n, s, A);
}
function iA(A, e) {
  if (A === !1 || A === null || typeof A > "u") throw new Error(e);
}
function oa(A, e) {
  if (!A) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function rd() {
  return Math.random().toString(36).substr(2, 8);
}
function Jo(A, e) {
  return { usr: A.state, key: A.key, idx: e };
}
function ar(A, e, n, s) {
  return (
    n === void 0 && (n = null),
    qn(
      { pathname: typeof A == "string" ? A : A.pathname, search: "", hash: "" },
      typeof e == "string" ? Dt(e) : e,
      { state: n, key: (e && e.key) || s || rd() },
    )
  );
}
function gi(A) {
  let { pathname: e = "/", search: n = "", hash: s = "" } = A;
  return (
    n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    s && s !== "#" && (e += s.charAt(0) === "#" ? s : "#" + s),
    e
  );
}
function Dt(A) {
  let e = {};
  if (A) {
    let n = A.indexOf("#");
    n >= 0 && ((e.hash = A.substr(n)), (A = A.substr(0, n)));
    let s = A.indexOf("?");
    (s >= 0 && ((e.search = A.substr(s)), (A = A.substr(0, s))),
      A && (e.pathname = A));
  }
  return e;
}
function ad(A, e, n, s) {
  s === void 0 && (s = {});
  let { window: i = document.defaultView, v5Compat: l = !1 } = s,
    r = i.history,
    o = be.Pop,
    a = null,
    g = C();
  g == null && ((g = 0), r.replaceState(qn({}, r.state, { idx: g }), ""));
  function C() {
    return (r.state || { idx: null }).idx;
  }
  function E() {
    o = be.Pop;
    let h = C(),
      d = h == null ? null : h - g;
    ((g = h), a && a({ action: o, location: Q.location, delta: d }));
  }
  function c(h, d) {
    o = be.Push;
    let I = ar(Q.location, h, d);
    (n && n(I, h), (g = C() + 1));
    let w = Jo(I, g),
      D = Q.createHref(I);
    try {
      r.pushState(w, "", D);
    } catch (j) {
      if (j instanceof DOMException && j.name === "DataCloneError") throw j;
      i.location.assign(D);
    }
    l && a && a({ action: o, location: Q.location, delta: 1 });
  }
  function m(h, d) {
    o = be.Replace;
    let I = ar(Q.location, h, d);
    (n && n(I, h), (g = C()));
    let w = Jo(I, g),
      D = Q.createHref(I);
    (r.replaceState(w, "", D),
      l && a && a({ action: o, location: Q.location, delta: 0 }));
  }
  function u(h) {
    let d = i.location.origin !== "null" ? i.location.origin : i.location.href,
      I = typeof h == "string" ? h : gi(h);
    return (
      (I = I.replace(/ $/, "%20")),
      iA(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          I,
      ),
      new URL(I, d)
    );
  }
  let Q = {
    get action() {
      return o;
    },
    get location() {
      return A(i, r);
    },
    listen(h) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(fo, E),
        (a = h),
        () => {
          (i.removeEventListener(fo, E), (a = null));
        }
      );
    },
    createHref(h) {
      return e(i, h);
    },
    createURL: u,
    encodeLocation(h) {
      let d = u(h);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: c,
    replace: m,
    go(h) {
      return r.go(h);
    },
  };
  return Q;
}
var xo;
(function (A) {
  ((A.data = "data"),
    (A.deferred = "deferred"),
    (A.redirect = "redirect"),
    (A.error = "error"));
})(xo || (xo = {}));
function od(A, e, n) {
  return (n === void 0 && (n = "/"), gd(A, e, n));
}
function gd(A, e, n, s) {
  let i = typeof e == "string" ? Dt(e) : e,
    l = en(i.pathname || "/", n);
  if (l == null) return null;
  let r = rE(A);
  cd(r);
  let o = null,
    a = Dd(l);
  for (let g = 0; o == null && g < r.length; ++g) o = wd(r[g], a);
  return o;
}
function rE(A, e, n, s) {
  (e === void 0 && (e = []),
    n === void 0 && (n = []),
    s === void 0 && (s = ""));
  let i = (l, r, o) => {
    let a = {
      relativePath: o === void 0 ? l.path || "" : o,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: r,
      route: l,
    };
    a.relativePath.startsWith("/") &&
      (iA(
        a.relativePath.startsWith(s),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + s + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (a.relativePath = a.relativePath.slice(s.length)));
    let g = Oe([s, a.relativePath]),
      C = n.concat(a);
    (l.children &&
      l.children.length > 0 &&
      (iA(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + g + '".'),
      ),
      rE(l.children, e, C, g)),
      !(l.path == null && !l.index) &&
        e.push({ path: g, score: Bd(g, l.index), routesMeta: C }));
  };
  return (
    A.forEach((l, r) => {
      var o;
      if (l.path === "" || !((o = l.path) != null && o.includes("?"))) i(l, r);
      else for (let a of aE(l.path)) i(l, r, a);
    }),
    e
  );
}
function aE(A) {
  let e = A.split("/");
  if (e.length === 0) return [];
  let [n, ...s] = e,
    i = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (s.length === 0) return i ? [l, ""] : [l];
  let r = aE(s.join("/")),
    o = [];
  return (
    o.push(...r.map((a) => (a === "" ? l : [l, a].join("/")))),
    i && o.push(...r),
    o.map((a) => (A.startsWith("/") && a === "" ? "/" : a))
  );
}
function cd(A) {
  A.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : Qd(
          e.routesMeta.map((s) => s.childrenIndex),
          n.routesMeta.map((s) => s.childrenIndex),
        ),
  );
}
const Ed = /^:[\w-]+$/,
  Cd = 3,
  Id = 2,
  dd = 1,
  ud = 10,
  hd = -2,
  No = (A) => A === "*";
function Bd(A, e) {
  let n = A.split("/"),
    s = n.length;
  return (
    n.some(No) && (s += hd),
    e && (s += Id),
    n
      .filter((i) => !No(i))
      .reduce((i, l) => i + (Ed.test(l) ? Cd : l === "" ? dd : ud), s)
  );
}
function Qd(A, e) {
  return A.length === e.length && A.slice(0, -1).every((s, i) => s === e[i])
    ? A[A.length - 1] - e[e.length - 1]
    : 0;
}
function wd(A, e, n) {
  let { routesMeta: s } = A,
    i = {},
    l = "/",
    r = [];
  for (let o = 0; o < s.length; ++o) {
    let a = s[o],
      g = o === s.length - 1,
      C = l === "/" ? e : e.slice(l.length) || "/",
      E = or(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: g },
        C,
      ),
      c = a.route;
    if (!E) return null;
    (Object.assign(i, E.params),
      r.push({
        params: i,
        pathname: Oe([l, E.pathname]),
        pathnameBase: pd(Oe([l, E.pathnameBase])),
        route: c,
      }),
      E.pathnameBase !== "/" && (l = Oe([l, E.pathnameBase])));
  }
  return r;
}
function or(A, e) {
  typeof A == "string" && (A = { path: A, caseSensitive: !1, end: !0 });
  let [n, s] = md(A.path, A.caseSensitive, A.end),
    i = e.match(n);
  if (!i) return null;
  let l = i[0],
    r = l.replace(/(.)\/+$/, "$1"),
    o = i.slice(1);
  return {
    params: s.reduce((g, C, E) => {
      let { paramName: c, isOptional: m } = C;
      if (c === "*") {
        let Q = o[E] || "";
        r = l.slice(0, l.length - Q.length).replace(/(.)\/+$/, "$1");
      }
      const u = o[E];
      return (
        m && !u ? (g[c] = void 0) : (g[c] = (u || "").replace(/%2F/g, "/")),
        g
      );
    }, {}),
    pathname: l,
    pathnameBase: r,
    pattern: A,
  };
}
function md(A, e, n) {
  (e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    oa(
      A === "*" || !A.endsWith("*") || A.endsWith("/*"),
      'Route path "' +
        A +
        '" will be treated as if it were ' +
        ('"' + A.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + A.replace(/\*$/, "/*") + '".'),
    ));
  let s = [],
    i =
      "^" +
      A.replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (r, o, a) => (
            s.push({ paramName: o, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    A.endsWith("*")
      ? (s.push({ paramName: "*" }),
        (i += A === "*" || A === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (i += "\\/*$")
        : A !== "" && A !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, e ? void 0 : "i"), s]
  );
}
function Dd(A) {
  try {
    return A.split("/")
      .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
      .join("/");
  } catch (e) {
    return (
      oa(
        !1,
        'The URL path "' +
          A +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ")."),
      ),
      A
    );
  }
}
function en(A, e) {
  if (e === "/") return A;
  if (!A.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length,
    s = A.charAt(n);
  return s && s !== "/" ? null : A.slice(n) || "/";
}
function Md(A, e) {
  e === void 0 && (e = "/");
  let {
      pathname: n,
      search: s = "",
      hash: i = "",
    } = typeof A == "string" ? Dt(A) : A,
    l;
  return (
    n
      ? ((n = oE(n)),
        n.startsWith("/") ? (l = Zo(n.substring(1), "/")) : (l = Zo(n, e)))
      : (l = e),
    { pathname: l, search: Sd(s), hash: kd(i) }
  );
}
function Zo(A, e) {
  let n = e.replace(/\/+$/, "").split("/");
  return (
    A.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Cl(A, e, n, s) {
  return (
    "Cannot include a '" +
    A +
    "' character in a manually specified " +
    ("`to." +
      e +
      "` field [" +
      JSON.stringify(s) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function jd(A) {
  return A.filter(
    (e, n) => n === 0 || (e.route.path && e.route.path.length > 0),
  );
}
function ga(A, e) {
  let n = jd(A);
  return e
    ? n.map((s, i) => (i === n.length - 1 ? s.pathname : s.pathnameBase))
    : n.map((s) => s.pathnameBase);
}
function ca(A, e, n, s) {
  s === void 0 && (s = !1);
  let i;
  typeof A == "string"
    ? (i = Dt(A))
    : ((i = qn({}, A)),
      iA(
        !i.pathname || !i.pathname.includes("?"),
        Cl("?", "pathname", "search", i),
      ),
      iA(
        !i.pathname || !i.pathname.includes("#"),
        Cl("#", "pathname", "hash", i),
      ),
      iA(!i.search || !i.search.includes("#"), Cl("#", "search", "hash", i)));
  let l = A === "" || i.pathname === "",
    r = l ? "/" : i.pathname,
    o;
  if (r == null) o = n;
  else {
    let E = e.length - 1;
    if (!s && r.startsWith("..")) {
      let c = r.split("/");
      for (; c[0] === "..";) (c.shift(), (E -= 1));
      i.pathname = c.join("/");
    }
    o = E >= 0 ? e[E] : "/";
  }
  let a = Md(i, o),
    g = r && r !== "/" && r.endsWith("/"),
    C = (l || r === ".") && n.endsWith("/");
  return (!a.pathname.endsWith("/") && (g || C) && (a.pathname += "/"), a);
}
const oE = (A) => A.replace(/\/\/+/g, "/"),
  Oe = (A) => oE(A.join("/")),
  pd = (A) => A.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Sd = (A) => (!A || A === "?" ? "" : A.startsWith("?") ? A : "?" + A),
  kd = (A) => (!A || A === "#" ? "" : A.startsWith("#") ? A : "#" + A);
function fd(A) {
  return (
    A != null &&
    typeof A.status == "number" &&
    typeof A.statusText == "string" &&
    typeof A.internal == "boolean" &&
    "data" in A
  );
}
const gE = ["post", "put", "patch", "delete"];
new Set(gE);
const Jd = ["get", ...gE];
new Set(Jd);
/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $n() {
  return (
    ($n = Object.assign
      ? Object.assign.bind()
      : function (A) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var s in n) ({}).hasOwnProperty.call(n, s) && (A[s] = n[s]);
          }
          return A;
        }),
    $n.apply(null, arguments)
  );
}
const Ni = B.createContext(null),
  cE = B.createContext(null),
  ke = B.createContext(null),
  Zi = B.createContext(null),
  Ce = B.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  EE = B.createContext(null);
function xd(A, e) {
  let { relative: n } = e === void 0 ? {} : e;
  an() || iA(!1);
  let { basename: s, navigator: i } = B.useContext(ke),
    { hash: l, pathname: r, search: o } = Gi(A, { relative: n }),
    a = r;
  return (
    s !== "/" && (a = r === "/" ? s : Oe([s, r])),
    i.createHref({ pathname: a, search: o, hash: l })
  );
}
function an() {
  return B.useContext(Zi) != null;
}
function fe() {
  return (an() || iA(!1), B.useContext(Zi).location);
}
function CE(A) {
  B.useContext(ke).static || B.useLayoutEffect(A);
}
function H() {
  let { isDataRoute: A } = B.useContext(Ce);
  return A ? Ld() : Nd();
}
function Nd() {
  an() || iA(!1);
  let A = B.useContext(Ni),
    { basename: e, future: n, navigator: s } = B.useContext(ke),
    { matches: i } = B.useContext(Ce),
    { pathname: l } = fe(),
    r = JSON.stringify(ga(i, n.v7_relativeSplatPath)),
    o = B.useRef(!1);
  return (
    CE(() => {
      o.current = !0;
    }),
    B.useCallback(
      function (g, C) {
        if ((C === void 0 && (C = {}), !o.current)) return;
        if (typeof g == "number") {
          s.go(g);
          return;
        }
        let E = ca(g, JSON.parse(r), l, C.relative === "path");
        (A == null &&
          e !== "/" &&
          (E.pathname = E.pathname === "/" ? e : Oe([e, E.pathname])),
          (C.replace ? s.replace : s.push)(E, C.state, C));
      },
      [e, s, r, l, A],
    )
  );
}
const Zd = B.createContext(null);
function Gd(A) {
  let e = B.useContext(Ce).outlet;
  return e && B.createElement(Zd.Provider, { value: A }, e);
}
function on() {
  let { matches: A } = B.useContext(Ce),
    e = A[A.length - 1];
  return e ? e.params : {};
}
function Gi(A, e) {
  let { relative: n } = e === void 0 ? {} : e,
    { future: s } = B.useContext(ke),
    { matches: i } = B.useContext(Ce),
    { pathname: l } = fe(),
    r = JSON.stringify(ga(i, s.v7_relativeSplatPath));
  return B.useMemo(() => ca(A, JSON.parse(r), l, n === "path"), [A, r, l, n]);
}
function yd(A, e) {
  return vd(A, e);
}
function vd(A, e, n, s) {
  an() || iA(!1);
  let { navigator: i } = B.useContext(ke),
    { matches: l } = B.useContext(Ce),
    r = l[l.length - 1],
    o = r ? r.params : {};
  r && r.pathname;
  let a = r ? r.pathnameBase : "/";
  r && r.route;
  let g = fe(),
    C;
  if (e) {
    var E;
    let h = typeof e == "string" ? Dt(e) : e;
    (a === "/" || ((E = h.pathname) != null && E.startsWith(a)) || iA(!1),
      (C = h));
  } else C = g;
  let c = C.pathname || "/",
    m = c;
  if (a !== "/") {
    let h = a.replace(/^\//, "").split("/");
    m = "/" + c.replace(/^\//, "").split("/").slice(h.length).join("/");
  }
  let u = od(A, { pathname: m }),
    Q = Ud(
      u &&
        u.map((h) =>
          Object.assign({}, h, {
            params: Object.assign({}, o, h.params),
            pathname: Oe([
              a,
              i.encodeLocation
                ? i.encodeLocation(h.pathname).pathname
                : h.pathname,
            ]),
            pathnameBase:
              h.pathnameBase === "/"
                ? a
                : Oe([
                    a,
                    i.encodeLocation
                      ? i.encodeLocation(h.pathnameBase).pathname
                      : h.pathnameBase,
                  ]),
          }),
        ),
      l,
      n,
      s,
    );
  return e && Q
    ? B.createElement(
        Zi.Provider,
        {
          value: {
            location: $n(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              C,
            ),
            navigationType: be.Pop,
          },
        },
        Q,
      )
    : Q;
}
function Rd() {
  let A = Kd(),
    e = fd(A)
      ? A.status + " " + A.statusText
      : A instanceof Error
        ? A.message
        : JSON.stringify(A),
    n = A instanceof Error ? A.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return B.createElement(
    B.Fragment,
    null,
    B.createElement("h2", null, "Unexpected Application Error!"),
    B.createElement("h3", { style: { fontStyle: "italic" } }, e),
    n ? B.createElement("pre", { style: i }, n) : null,
    null,
  );
}
const Yd = B.createElement(Rd, null);
class bd extends B.Component {
  constructor(e) {
    (super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      }));
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location ||
      (n.revalidation !== "idle" && e.revalidation === "idle")
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error !== void 0 ? e.error : n.error,
          location: n.location,
          revalidation: e.revalidation || n.revalidation,
        };
  }
  componentDidCatch(e, n) {
    console.error(
      "React Router caught the following error during render",
      e,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? B.createElement(
          Ce.Provider,
          { value: this.props.routeContext },
          B.createElement(EE.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Wd(A) {
  let { routeContext: e, match: n, children: s } = A,
    i = B.useContext(Ni);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    B.createElement(Ce.Provider, { value: e }, s)
  );
}
function Ud(A, e, n, s) {
  var i;
  if (
    (e === void 0 && (e = []),
    n === void 0 && (n = null),
    s === void 0 && (s = null),
    A == null)
  ) {
    var l;
    if (!n) return null;
    if (n.errors) A = n.matches;
    else if (
      (l = s) != null &&
      l.v7_partialHydration &&
      e.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      A = n.matches;
    else return null;
  }
  let r = A,
    o = (i = n) == null ? void 0 : i.errors;
  if (o != null) {
    let C = r.findIndex(
      (E) => E.route.id && (o == null ? void 0 : o[E.route.id]) !== void 0,
    );
    (C >= 0 || iA(!1), (r = r.slice(0, Math.min(r.length, C + 1))));
  }
  let a = !1,
    g = -1;
  if (n && s && s.v7_partialHydration)
    for (let C = 0; C < r.length; C++) {
      let E = r[C];
      if (
        ((E.route.HydrateFallback || E.route.hydrateFallbackElement) && (g = C),
        E.route.id)
      ) {
        let { loaderData: c, errors: m } = n,
          u =
            E.route.loader &&
            c[E.route.id] === void 0 &&
            (!m || m[E.route.id] === void 0);
        if (E.route.lazy || u) {
          ((a = !0), g >= 0 ? (r = r.slice(0, g + 1)) : (r = [r[0]]));
          break;
        }
      }
    }
  return r.reduceRight((C, E, c) => {
    let m,
      u = !1,
      Q = null,
      h = null;
    n &&
      ((m = o && E.route.id ? o[E.route.id] : void 0),
      (Q = E.route.errorElement || Yd),
      a &&
        (g < 0 && c === 0
          ? (Pd("route-fallback"), (u = !0), (h = null))
          : g === c &&
            ((u = !0), (h = E.route.hydrateFallbackElement || null))));
    let d = e.concat(r.slice(0, c + 1)),
      I = () => {
        let w;
        return (
          m
            ? (w = Q)
            : u
              ? (w = h)
              : E.route.Component
                ? (w = B.createElement(E.route.Component, null))
                : E.route.element
                  ? (w = E.route.element)
                  : (w = C),
          B.createElement(Wd, {
            match: E,
            routeContext: { outlet: C, matches: d, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (E.route.ErrorBoundary || E.route.errorElement || c === 0)
      ? B.createElement(bd, {
          location: n.location,
          revalidation: n.revalidation,
          component: Q,
          error: m,
          children: I(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : I();
  }, null);
}
var IE = (function (A) {
    return (
      (A.UseBlocker = "useBlocker"),
      (A.UseRevalidator = "useRevalidator"),
      (A.UseNavigateStable = "useNavigate"),
      A
    );
  })(IE || {}),
  dE = (function (A) {
    return (
      (A.UseBlocker = "useBlocker"),
      (A.UseLoaderData = "useLoaderData"),
      (A.UseActionData = "useActionData"),
      (A.UseRouteError = "useRouteError"),
      (A.UseNavigation = "useNavigation"),
      (A.UseRouteLoaderData = "useRouteLoaderData"),
      (A.UseMatches = "useMatches"),
      (A.UseRevalidator = "useRevalidator"),
      (A.UseNavigateStable = "useNavigate"),
      (A.UseRouteId = "useRouteId"),
      A
    );
  })(dE || {});
function Fd(A) {
  let e = B.useContext(Ni);
  return (e || iA(!1), e);
}
function Td(A) {
  let e = B.useContext(cE);
  return (e || iA(!1), e);
}
function Vd(A) {
  let e = B.useContext(Ce);
  return (e || iA(!1), e);
}
function uE(A) {
  let e = Vd(),
    n = e.matches[e.matches.length - 1];
  return (n.route.id || iA(!1), n.route.id);
}
function Kd() {
  var A;
  let e = B.useContext(EE),
    n = Td(),
    s = uE();
  return e !== void 0 ? e : (A = n.errors) == null ? void 0 : A[s];
}
function Ld() {
  let { router: A } = Fd(IE.UseNavigateStable),
    e = uE(dE.UseNavigateStable),
    n = B.useRef(!1);
  return (
    CE(() => {
      n.current = !0;
    }),
    B.useCallback(
      function (i, l) {
        (l === void 0 && (l = {}),
          n.current &&
            (typeof i == "number"
              ? A.navigate(i)
              : A.navigate(i, $n({ fromRouteId: e }, l))));
      },
      [A, e],
    )
  );
}
const Go = {};
function Pd(A, e, n) {
  Go[A] || (Go[A] = !0);
}
function Od(A, e) {
  (A == null || A.v7_startTransition, A == null || A.v7_relativeSplatPath);
}
function zd(A) {
  let { to: e, replace: n, state: s, relative: i } = A;
  an() || iA(!1);
  let { future: l, static: r } = B.useContext(ke),
    { matches: o } = B.useContext(Ce),
    { pathname: a } = fe(),
    g = H(),
    C = ca(e, ga(o, l.v7_relativeSplatPath), a, i === "path"),
    E = JSON.stringify(C);
  return (
    B.useEffect(
      () => g(JSON.parse(E), { replace: n, state: s, relative: i }),
      [g, E, i, n, s],
    ),
    null
  );
}
function hE(A) {
  return Gd(A.context);
}
function G(A) {
  iA(!1);
}
function Xd(A) {
  let {
    basename: e = "/",
    children: n = null,
    location: s,
    navigationType: i = be.Pop,
    navigator: l,
    static: r = !1,
    future: o,
  } = A;
  an() && iA(!1);
  let a = e.replace(/^\/*/, "/"),
    g = B.useMemo(
      () => ({
        basename: a,
        navigator: l,
        static: r,
        future: $n({ v7_relativeSplatPath: !1 }, o),
      }),
      [a, o, l, r],
    );
  typeof s == "string" && (s = Dt(s));
  let {
      pathname: C = "/",
      search: E = "",
      hash: c = "",
      state: m = null,
      key: u = "default",
    } = s,
    Q = B.useMemo(() => {
      let h = en(C, a);
      return h == null
        ? null
        : {
            location: { pathname: h, search: E, hash: c, state: m, key: u },
            navigationType: i,
          };
    }, [a, C, E, c, m, u, i]);
  return Q == null
    ? null
    : B.createElement(
        ke.Provider,
        { value: g },
        B.createElement(Zi.Provider, { children: n, value: Q }),
      );
}
function Hd(A) {
  let { children: e, location: n } = A;
  return yd(gr(e), n);
}
new Promise(() => {});
function gr(A, e) {
  e === void 0 && (e = []);
  let n = [];
  return (
    B.Children.forEach(A, (s, i) => {
      if (!B.isValidElement(s)) return;
      let l = [...e, i];
      if (s.type === B.Fragment) {
        n.push.apply(n, gr(s.props.children, l));
        return;
      }
      (s.type !== G && iA(!1), !s.props.index || !s.props.children || iA(!1));
      let r = {
        id: s.props.id || l.join("-"),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        loader: s.props.loader,
        action: s.props.action,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.ErrorBoundary != null || s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      (s.props.children && (r.children = gr(s.props.children, l)), n.push(r));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ci() {
  return (
    (ci = Object.assign
      ? Object.assign.bind()
      : function (A) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var s in n) ({}).hasOwnProperty.call(n, s) && (A[s] = n[s]);
          }
          return A;
        }),
    ci.apply(null, arguments)
  );
}
function BE(A, e) {
  if (A == null) return {};
  var n = {};
  for (var s in A)
    if ({}.hasOwnProperty.call(A, s)) {
      if (e.indexOf(s) !== -1) continue;
      n[s] = A[s];
    }
  return n;
}
function qd(A) {
  return !!(A.metaKey || A.altKey || A.ctrlKey || A.shiftKey);
}
function $d(A, e) {
  return A.button === 0 && (!e || e === "_self") && !qd(A);
}
function cr(A) {
  return (
    A === void 0 && (A = ""),
    new URLSearchParams(
      typeof A == "string" || Array.isArray(A) || A instanceof URLSearchParams
        ? A
        : Object.keys(A).reduce((e, n) => {
            let s = A[n];
            return e.concat(Array.isArray(s) ? s.map((i) => [n, i]) : [[n, s]]);
          }, []),
    )
  );
}
function _d(A, e) {
  let n = cr(A);
  return (
    e &&
      e.forEach((s, i) => {
        n.has(i) ||
          e.getAll(i).forEach((l) => {
            n.append(i, l);
          });
      }),
    n
  );
}
const Au = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  eu = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  tu = "6";
try {
  window.__reactRouterVersion = tu;
} catch {}
const nu = B.createContext({ isTransitioning: !1 }),
  su = "startTransition",
  yo = zE[su];
function iu(A) {
  let { basename: e, children: n, future: s, window: i } = A,
    l = B.useRef();
  l.current == null && (l.current = ld({ window: i, v5Compat: !0 }));
  let r = l.current,
    [o, a] = B.useState({ action: r.action, location: r.location }),
    { v7_startTransition: g } = s || {},
    C = B.useCallback(
      (E) => {
        g && yo ? yo(() => a(E)) : a(E);
      },
      [a, g],
    );
  return (
    B.useLayoutEffect(() => r.listen(C), [r, C]),
    B.useEffect(() => Od(s), [s]),
    B.createElement(Xd, {
      basename: e,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: r,
      future: s,
    })
  );
}
const lu =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ru = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  K = B.forwardRef(function (e, n) {
    let {
        onClick: s,
        relative: i,
        reloadDocument: l,
        replace: r,
        state: o,
        target: a,
        to: g,
        preventScrollReset: C,
        viewTransition: E,
      } = e,
      c = BE(e, Au),
      { basename: m } = B.useContext(ke),
      u,
      Q = !1;
    if (typeof g == "string" && ru.test(g) && ((u = g), lu))
      try {
        let w = new URL(window.location.href),
          D = g.startsWith("//") ? new URL(w.protocol + g) : new URL(g),
          j = en(D.pathname, m);
        D.origin === w.origin && j != null
          ? (g = j + D.search + D.hash)
          : (Q = !0);
      } catch {}
    let h = xd(g, { relative: i }),
      d = ou(g, {
        replace: r,
        state: o,
        target: a,
        preventScrollReset: C,
        relative: i,
        viewTransition: E,
      });
    function I(w) {
      (s && s(w), w.defaultPrevented || d(w));
    }
    return B.createElement(
      "a",
      ci({}, c, { href: u || h, onClick: Q || l ? s : I, ref: n, target: a }),
    );
  }),
  Ot = B.forwardRef(function (e, n) {
    let {
        "aria-current": s = "page",
        caseSensitive: i = !1,
        className: l = "",
        end: r = !1,
        style: o,
        to: a,
        viewTransition: g,
        children: C,
      } = e,
      E = BE(e, eu),
      c = Gi(a, { relative: E.relative }),
      m = fe(),
      u = B.useContext(cE),
      { navigator: Q, basename: h } = B.useContext(ke),
      d = u != null && gu(c) && g === !0,
      I = Q.encodeLocation ? Q.encodeLocation(c).pathname : c.pathname,
      w = m.pathname,
      D =
        u && u.navigation && u.navigation.location
          ? u.navigation.location.pathname
          : null;
    (i ||
      ((w = w.toLowerCase()),
      (D = D ? D.toLowerCase() : null),
      (I = I.toLowerCase())),
      D && h && (D = en(D, h) || D));
    const j = I !== "/" && I.endsWith("/") ? I.length - 1 : I.length;
    let J = w === I || (!r && w.startsWith(I) && w.charAt(j) === "/"),
      M =
        D != null &&
        (D === I || (!r && D.startsWith(I) && D.charAt(I.length) === "/")),
      p = { isActive: J, isPending: M, isTransitioning: d },
      k = J ? s : void 0,
      x;
    typeof l == "function"
      ? (x = l(p))
      : (x = [
          l,
          J ? "active" : null,
          M ? "pending" : null,
          d ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let eA = typeof o == "function" ? o(p) : o;
    return B.createElement(
      K,
      ci({}, E, {
        "aria-current": k,
        className: x,
        ref: n,
        style: eA,
        to: a,
        viewTransition: g,
      }),
      typeof C == "function" ? C(p) : C,
    );
  });
var Er;
(function (A) {
  ((A.UseScrollRestoration = "useScrollRestoration"),
    (A.UseSubmit = "useSubmit"),
    (A.UseSubmitFetcher = "useSubmitFetcher"),
    (A.UseFetcher = "useFetcher"),
    (A.useViewTransitionState = "useViewTransitionState"));
})(Er || (Er = {}));
var vo;
(function (A) {
  ((A.UseFetcher = "useFetcher"),
    (A.UseFetchers = "useFetchers"),
    (A.UseScrollRestoration = "useScrollRestoration"));
})(vo || (vo = {}));
function au(A) {
  let e = B.useContext(Ni);
  return (e || iA(!1), e);
}
function ou(A, e) {
  let {
      target: n,
      replace: s,
      state: i,
      preventScrollReset: l,
      relative: r,
      viewTransition: o,
    } = e === void 0 ? {} : e,
    a = H(),
    g = fe(),
    C = Gi(A, { relative: r });
  return B.useCallback(
    (E) => {
      if ($d(E, n)) {
        E.preventDefault();
        let c = s !== void 0 ? s : gi(g) === gi(C);
        a(A, {
          replace: c,
          state: i,
          preventScrollReset: l,
          relative: r,
          viewTransition: o,
        });
      }
    },
    [g, a, C, s, i, n, A, l, r, o],
  );
}
function QE(A) {
  let e = B.useRef(cr(A)),
    n = B.useRef(!1),
    s = fe(),
    i = B.useMemo(() => _d(s.search, n.current ? null : e.current), [s.search]),
    l = H(),
    r = B.useCallback(
      (o, a) => {
        const g = cr(typeof o == "function" ? o(i) : o);
        ((n.current = !0), l("?" + g, a));
      },
      [l, i],
    );
  return [i, r];
}
function gu(A, e) {
  e === void 0 && (e = {});
  let n = B.useContext(nu);