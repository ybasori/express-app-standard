(() => {
  "use strict";
  var e = {
      525: function (e, t, r) {
        var l =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        const o = l(r(860)),
          d = l(r(623)),
          a = l(r(101)),
          n = (0, o.default)();
        (0, d.default)((0, a.default)()).map((e) =>
          e.controller
            ? n[e.method](
                e.path,
                e.middleware ? e.middleware : [],
                e.controller
              )
            : null
        ),
          (t.default = n);
      },
      787: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = (e, t) => t.status(200).json({ status: "nice" }));
      },
      623: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = (e, t, l, o) => {
          let d = [...l];
          return (
            t.forEach((t) => {
              t.controller &&
                (d = [
                  ...d,
                  {
                    path: `${"/" !== e ? e : ""}${t.path}`,
                    method: t.method,
                    middleware: t.middleware ? [...o, ...t.middleware] : [...o],
                    controller: t.controller,
                  },
                ]),
                (Array.isArray(t.children) || "object" == typeof t.children) &&
                  (d = r(
                    `${"/" !== e ? e : ""}${t.path}`,
                    t.children,
                    d,
                    t.middleware ? [...o, ...t.middleware] : [...o]
                  ));
            }),
            d
          );
        };
        t.default = (e) => {
          let t = [];
          return (
            e.forEach((e) => {
              e.controller &&
                (t = [
                  ...t,
                  {
                    path: e.path,
                    method: e.method,
                    middleware: e.middleware,
                    controller: e.controller,
                  },
                ]),
                (Array.isArray(e.children) || "object" == typeof e.children) &&
                  (t = r(
                    e.path,
                    e.children,
                    t,
                    e.middleware ? [...e.middleware] : []
                  ));
            }),
            t
          );
        };
      },
      101: function (e, t, r) {
        var l =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        const o = l(r(787));
        t.default = () => [
          {
            path: "/",
            method: "get",
            controller: o.default,
            children: [{ path: "/one", method: "get", controller: o.default }],
          },
        ];
      },
      860: (e) => {
        e.exports = require("express");
      },
    },
    t = {};
  !(function r(l) {
    var o = t[l];
    if (void 0 !== o) return o.exports;
    var d = (t[l] = { exports: {} });
    return e[l].call(d.exports, d, d.exports, r), d.exports;
  })(525);
})();
