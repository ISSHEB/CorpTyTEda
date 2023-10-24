(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [156],
  {
    3845: function (e, r, t) {
      "use strict";
      var o = t(5318);
      r.Z = void 0;
      var n = o(t(4938)),
        a = t(5893),
        i = (0, n.default)(
          (0, a.jsx)("path", {
            d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z",
          }),
          "LockOutlined"
        );
      r.Z = i;
    },
    122: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return k;
        },
      });
      var o = t(3366),
        n = t(7462),
        a = t(7294),
        i = t(6010),
        s = t(7192),
        l = t(4844),
        u = t(1796),
        c = t(8216),
        d = t(1496),
        p = t(2734),
        f = t(1657),
        m = t(8791),
        h = t(1705),
        v = t(5861),
        b = t(8979);
      function y(e) {
        return (0, b.Z)("MuiLink", e);
      }
      var x = (0, t(6087).Z)("MuiLink", [
          "root",
          "underlineNone",
          "underlineHover",
          "underlineAlways",
          "button",
          "focusVisible",
        ]),
        Z = t(5893);
      const g = [
          "className",
          "color",
          "component",
          "onBlur",
          "onFocus",
          "TypographyClasses",
          "underline",
          "variant",
          "sx",
        ],
        w = {
          primary: "primary.main",
          textPrimary: "text.primary",
          secondary: "secondary.main",
          textSecondary: "text.secondary",
          error: "error.main",
        },
        M = (0, d.ZP)(v.Z, {
          name: "MuiLink",
          slot: "Root",
          overridesResolver: (e, r) => {
            const { ownerState: t } = e;
            return [
              r.root,
              r[`underline${(0, c.Z)(t.underline)}`],
              "button" === t.component && r.button,
            ];
          },
        })(({ theme: e, ownerState: r }) => {
          const t =
            (0, l.D)(e, `palette.${((e) => w[e] || e)(r.color)}`) || r.color;
          return (0, n.Z)(
            {},
            "none" === r.underline && { textDecoration: "none" },
            "hover" === r.underline && {
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            },
            "always" === r.underline && {
              textDecoration: "underline",
              textDecorationColor: "inherit" !== t ? (0, u.Fq)(t, 0.4) : void 0,
              "&:hover": { textDecorationColor: "inherit" },
            },
            "button" === r.component && {
              position: "relative",
              WebkitTapHighlightColor: "transparent",
              backgroundColor: "transparent",
              outline: 0,
              border: 0,
              margin: 0,
              borderRadius: 0,
              padding: 0,
              cursor: "pointer",
              userSelect: "none",
              verticalAlign: "middle",
              MozAppearance: "none",
              WebkitAppearance: "none",
              "&::-moz-focus-inner": { borderStyle: "none" },
              [`&.${x.focusVisible}`]: { outline: "auto" },
            }
          );
        });
      var k = a.forwardRef(function (e, r) {
        const t = (0, p.Z)(),
          l = (0, f.Z)({ props: e, name: "MuiLink" }),
          {
            className: u,
            color: d = "primary",
            component: v = "a",
            onBlur: b,
            onFocus: x,
            TypographyClasses: k,
            underline: S = "always",
            variant: O = "inherit",
            sx: P,
          } = l,
          j = (0, o.Z)(l, g),
          C =
            "function" === typeof P ? P(t).color : null == P ? void 0 : P.color,
          { isFocusVisibleRef: F, onBlur: R, onFocus: z, ref: _ } = (0, m.Z)(),
          [q, A] = a.useState(!1),
          T = (0, h.Z)(r, _),
          H = (0, n.Z)({}, l, {
            color: ("function" === typeof C ? C(t) : C) || d,
            component: v,
            focusVisible: q,
            underline: S,
            variant: O,
          }),
          D = ((e) => {
            const {
                classes: r,
                component: t,
                focusVisible: o,
                underline: n,
              } = e,
              a = {
                root: [
                  "root",
                  `underline${(0, c.Z)(n)}`,
                  "button" === t && "button",
                  o && "focusVisible",
                ],
              };
            return (0, s.Z)(a, y, r);
          })(H);
        return (0, Z.jsx)(
          M,
          (0, n.Z)(
            {
              color: d,
              className: (0, i.Z)(D.root, u),
              classes: k,
              component: v,
              onBlur: (e) => {
                R(e), !1 === F.current && A(!1), b && b(e);
              },
              onFocus: (e) => {
                z(e), !0 === F.current && A(!0), x && x(e);
              },
              ref: T,
              ownerState: H,
              variant: O,
              sx: [
                ...(e.color ? [{ color: w[d] || d }] : []),
                ...(Array.isArray(P) ? P : [P]),
              ],
            },
            j
          )
        );
      });
    },
    8271: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return $;
        },
      });
      var o = t(7462),
        n = t(3366),
        a = t(7294),
        i = t(6010),
        s = t(7192),
        l = t(7579),
        u = t(1496),
        c = t(1657),
        d = t(89),
        p = t(8288),
        f = t(7058),
        m = t(5704),
        h = t(4423),
        v = t(8216),
        b = t(8979),
        y = t(6087);
      function x(e) {
        return (0, b.Z)("MuiFormLabel", e);
      }
      var Z = (0, y.Z)("MuiFormLabel", [
          "root",
          "colorSecondary",
          "focused",
          "disabled",
          "error",
          "filled",
          "required",
          "asterisk",
        ]),
        g = t(5893);
      const w = [
          "children",
          "className",
          "color",
          "component",
          "disabled",
          "error",
          "filled",
          "focused",
          "required",
        ],
        M = (0, u.ZP)("label", {
          name: "MuiFormLabel",
          slot: "Root",
          overridesResolver: ({ ownerState: e }, r) =>
            (0, o.Z)(
              {},
              r.root,
              "secondary" === e.color && r.colorSecondary,
              e.filled && r.filled
            ),
        })(({ theme: e, ownerState: r }) =>
          (0, o.Z)({ color: e.palette.text.secondary }, e.typography.body1, {
            lineHeight: "1.4375em",
            padding: 0,
            position: "relative",
            [`&.${Z.focused}`]: { color: e.palette[r.color].main },
            [`&.${Z.disabled}`]: { color: e.palette.text.disabled },
            [`&.${Z.error}`]: { color: e.palette.error.main },
          })
        ),
        k = (0, u.ZP)("span", {
          name: "MuiFormLabel",
          slot: "Asterisk",
          overridesResolver: (e, r) => r.asterisk,
        })(({ theme: e }) => ({
          [`&.${Z.error}`]: { color: e.palette.error.main },
        }));
      var S = a.forwardRef(function (e, r) {
        const t = (0, c.Z)({ props: e, name: "MuiFormLabel" }),
          { children: a, className: l, component: u = "label" } = t,
          d = (0, n.Z)(t, w),
          p = (0, h.Z)(),
          f = (0, m.Z)({
            props: t,
            muiFormControl: p,
            states: [
              "color",
              "required",
              "focused",
              "disabled",
              "error",
              "filled",
            ],
          }),
          b = (0, o.Z)({}, t, {
            color: f.color || "primary",
            component: u,
            disabled: f.disabled,
            error: f.error,
            filled: f.filled,
            focused: f.focused,
            required: f.required,
          }),
          y = ((e) => {
            const {
                classes: r,
                color: t,
                focused: o,
                disabled: n,
                error: a,
                filled: i,
                required: l,
              } = e,
              u = {
                root: [
                  "root",
                  `color${(0, v.Z)(t)}`,
                  n && "disabled",
                  a && "error",
                  i && "filled",
                  o && "focused",
                  l && "required",
                ],
                asterisk: ["asterisk", a && "error"],
              };
            return (0, s.Z)(u, x, r);
          })(b);
        return (0,
        g.jsxs)(M, (0, o.Z)({ as: u, ownerState: b, className: (0, i.Z)(y.root, l), ref: r }, d, { children: [a, f.required && (0, g.jsxs)(k, { ownerState: b, "aria-hidden": !0, className: y.asterisk, children: ["\u2009", "*"] })] }));
      });
      function O(e) {
        return (0, b.Z)("MuiInputLabel", e);
      }
      (0, y.Z)("MuiInputLabel", [
        "root",
        "focused",
        "disabled",
        "error",
        "required",
        "asterisk",
        "formControl",
        "sizeSmall",
        "shrink",
        "animated",
        "standard",
        "filled",
        "outlined",
      ]);
      const P = ["disableAnimation", "margin", "shrink", "variant"],
        j = (0, u.ZP)(S, {
          shouldForwardProp: (e) => (0, u.FO)(e) || "classes" === e,
          name: "MuiInputLabel",
          slot: "Root",
          overridesResolver: (e, r) => {
            const { ownerState: t } = e;
            return [
              { [`& .${Z.asterisk}`]: r.asterisk },
              r.root,
              t.formControl && r.formControl,
              "small" === t.size && r.sizeSmall,
              t.shrink && r.shrink,
              !t.disableAnimation && r.animated,
              r[t.variant],
            ];
          },
        })(({ theme: e, ownerState: r }) =>
          (0, o.Z)(
            {
              display: "block",
              transformOrigin: "top left",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "100%",
            },
            r.formControl && {
              position: "absolute",
              left: 0,
              top: 0,
              transform: "translate(0, 20px) scale(1)",
            },
            "small" === r.size && { transform: "translate(0, 17px) scale(1)" },
            r.shrink && {
              transform: "translate(0, -1.5px) scale(0.75)",
              transformOrigin: "top left",
              maxWidth: "133%",
            },
            !r.disableAnimation && {
              transition: e.transitions.create(
                ["color", "transform", "max-width"],
                {
                  duration: e.transitions.duration.shorter,
                  easing: e.transitions.easing.easeOut,
                }
              ),
            },
            "filled" === r.variant &&
              (0, o.Z)(
                {
                  zIndex: 1,
                  pointerEvents: "none",
                  transform: "translate(12px, 16px) scale(1)",
                  maxWidth: "calc(100% - 24px)",
                },
                "small" === r.size && {
                  transform: "translate(12px, 13px) scale(1)",
                },
                r.shrink &&
                  (0, o.Z)(
                    {
                      userSelect: "none",
                      pointerEvents: "auto",
                      transform: "translate(12px, 7px) scale(0.75)",
                      maxWidth: "calc(133% - 24px)",
                    },
                    "small" === r.size && {
                      transform: "translate(12px, 4px) scale(0.75)",
                    }
                  )
              ),
            "outlined" === r.variant &&
              (0, o.Z)(
                {
                  zIndex: 1,
                  pointerEvents: "none",
                  transform: "translate(14px, 16px) scale(1)",
                  maxWidth: "calc(100% - 24px)",
                },
                "small" === r.size && {
                  transform: "translate(14px, 9px) scale(1)",
                },
                r.shrink && {
                  userSelect: "none",
                  pointerEvents: "auto",
                  maxWidth: "calc(133% - 24px)",
                  transform: "translate(14px, -9px) scale(0.75)",
                }
              )
          )
        );
      var C = a.forwardRef(function (e, r) {
          const t = (0, c.Z)({ name: "MuiInputLabel", props: e }),
            { disableAnimation: a = !1, shrink: i } = t,
            l = (0, n.Z)(t, P),
            u = (0, h.Z)();
          let d = i;
          "undefined" === typeof d &&
            u &&
            (d = u.filled || u.focused || u.adornedStart);
          const p = (0, m.Z)({
              props: t,
              muiFormControl: u,
              states: ["size", "variant", "required"],
            }),
            f = (0, o.Z)({}, t, {
              disableAnimation: a,
              formControl: u,
              shrink: d,
              size: p.size,
              variant: p.variant,
              required: p.required,
            }),
            v = ((e) => {
              const {
                  classes: r,
                  formControl: t,
                  size: n,
                  shrink: a,
                  disableAnimation: i,
                  variant: l,
                  required: u,
                } = e,
                c = {
                  root: [
                    "root",
                    t && "formControl",
                    !i && "animated",
                    a && "shrink",
                    "small" === n && "sizeSmall",
                    l,
                  ],
                  asterisk: [u && "asterisk"],
                },
                d = (0, s.Z)(c, O, r);
              return (0, o.Z)({}, r, d);
            })(f);
          return (0,
          g.jsx)(j, (0, o.Z)({ "data-shrink": d, ownerState: f, ref: r }, l, { classes: v }));
        }),
        F = t(4054);
      function R(e) {
        return (0, b.Z)("MuiFormHelperText", e);
      }
      var z,
        _ = (0, y.Z)("MuiFormHelperText", [
          "root",
          "error",
          "disabled",
          "sizeSmall",
          "sizeMedium",
          "contained",
          "focused",
          "filled",
          "required",
        ]);
      const q = [
          "children",
          "className",
          "component",
          "disabled",
          "error",
          "filled",
          "focused",
          "margin",
          "required",
          "variant",
        ],
        A = (0, u.ZP)("p", {
          name: "MuiFormHelperText",
          slot: "Root",
          overridesResolver: (e, r) => {
            const { ownerState: t } = e;
            return [
              r.root,
              t.size && r[`size${(0, v.Z)(t.size)}`],
              t.contained && r.contained,
              t.filled && r.filled,
            ];
          },
        })(({ theme: e, ownerState: r }) =>
          (0, o.Z)(
            { color: e.palette.text.secondary },
            e.typography.caption,
            {
              textAlign: "left",
              marginTop: 3,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
              [`&.${_.disabled}`]: { color: e.palette.text.disabled },
              [`&.${_.error}`]: { color: e.palette.error.main },
            },
            "small" === r.size && { marginTop: 4 },
            r.contained && { marginLeft: 14, marginRight: 14 }
          )
        );
      var T = a.forwardRef(function (e, r) {
          const t = (0, c.Z)({ props: e, name: "MuiFormHelperText" }),
            { children: a, className: l, component: u = "p" } = t,
            d = (0, n.Z)(t, q),
            p = (0, h.Z)(),
            f = (0, m.Z)({
              props: t,
              muiFormControl: p,
              states: [
                "variant",
                "size",
                "disabled",
                "error",
                "filled",
                "focused",
                "required",
              ],
            }),
            b = (0, o.Z)({}, t, {
              component: u,
              contained: "filled" === f.variant || "outlined" === f.variant,
              variant: f.variant,
              size: f.size,
              disabled: f.disabled,
              error: f.error,
              filled: f.filled,
              focused: f.focused,
              required: f.required,
            }),
            y = ((e) => {
              const {
                  classes: r,
                  contained: t,
                  size: o,
                  disabled: n,
                  error: a,
                  filled: i,
                  focused: l,
                  required: u,
                } = e,
                c = {
                  root: [
                    "root",
                    n && "disabled",
                    a && "error",
                    o && `size${(0, v.Z)(o)}`,
                    t && "contained",
                    l && "focused",
                    i && "filled",
                    u && "required",
                  ],
                };
              return (0, s.Z)(c, R, r);
            })(b);
          return (0,
          g.jsx)(A, (0, o.Z)({ as: u, ownerState: b, className: (0, i.Z)(y.root, l), ref: r }, d, { children: " " === a ? z || (z = (0, g.jsx)("span", { className: "notranslate", children: "\u200b" })) : a }));
        }),
        H = t(1683);
      function D(e) {
        return (0, b.Z)("MuiTextField", e);
      }
      (0, y.Z)("MuiTextField", ["root"]);
      const E = [
          "autoComplete",
          "autoFocus",
          "children",
          "className",
          "color",
          "defaultValue",
          "disabled",
          "error",
          "FormHelperTextProps",
          "fullWidth",
          "helperText",
          "id",
          "InputLabelProps",
          "inputProps",
          "InputProps",
          "inputRef",
          "label",
          "maxRows",
          "minRows",
          "multiline",
          "name",
          "onBlur",
          "onChange",
          "onFocus",
          "placeholder",
          "required",
          "rows",
          "select",
          "SelectProps",
          "type",
          "value",
          "variant",
        ],
        L = { standard: d.Z, filled: p.Z, outlined: f.Z },
        N = (0, u.ZP)(F.Z, {
          name: "MuiTextField",
          slot: "Root",
          overridesResolver: (e, r) => r.root,
        })({});
      var $ = a.forwardRef(function (e, r) {
        const t = (0, c.Z)({ props: e, name: "MuiTextField" }),
          {
            autoComplete: a,
            autoFocus: u = !1,
            children: d,
            className: p,
            color: f = "primary",
            defaultValue: m,
            disabled: h = !1,
            error: v = !1,
            FormHelperTextProps: b,
            fullWidth: y = !1,
            helperText: x,
            id: Z,
            InputLabelProps: w,
            inputProps: M,
            InputProps: k,
            inputRef: S,
            label: O,
            maxRows: P,
            minRows: j,
            multiline: F = !1,
            name: R,
            onBlur: z,
            onChange: _,
            onFocus: q,
            placeholder: A,
            required: $ = !1,
            rows: I,
            select: W = !1,
            SelectProps: V,
            type: B,
            value: U,
            variant: Q = "outlined",
          } = t,
          G = (0, n.Z)(t, E),
          J = (0, o.Z)({}, t, {
            autoFocus: u,
            color: f,
            disabled: h,
            error: v,
            fullWidth: y,
            multiline: F,
            required: $,
            select: W,
            variant: Q,
          }),
          K = ((e) => {
            const { classes: r } = e;
            return (0, s.Z)({ root: ["root"] }, D, r);
          })(J);
        const X = {};
        "outlined" === Q &&
          (w && "undefined" !== typeof w.shrink && (X.notched = w.shrink),
          (X.label = O)),
          W &&
            ((V && V.native) || (X.id = void 0),
            (X["aria-describedby"] = void 0));
        const Y = (0, l.Z)(Z),
          ee = x && Y ? `${Y}-helper-text` : void 0,
          re = O && Y ? `${Y}-label` : void 0,
          te = L[Q],
          oe = (0, g.jsx)(
            te,
            (0, o.Z)(
              {
                "aria-describedby": ee,
                autoComplete: a,
                autoFocus: u,
                defaultValue: m,
                fullWidth: y,
                multiline: F,
                name: R,
                rows: I,
                maxRows: P,
                minRows: j,
                type: B,
                value: U,
                id: Y,
                inputRef: S,
                onBlur: z,
                onChange: _,
                onFocus: q,
                placeholder: A,
                inputProps: M,
              },
              X,
              k
            )
          );
        return (0,
        g.jsxs)(N, (0, o.Z)({ className: (0, i.Z)(K.root, p), disabled: h, error: v, fullWidth: y, ref: r, required: $, color: f, variant: Q, ownerState: J }, G, { children: [null != O && "" !== O && (0, g.jsx)(C, (0, o.Z)({ htmlFor: Y, id: re }, w, { children: O })), W ? (0, g.jsx)(H.Z, (0, o.Z)({ "aria-describedby": ee, id: Y, labelId: re, value: U, input: oe }, V, { children: d })) : oe, x && (0, g.jsx)(T, (0, o.Z)({ id: ee }, b, { children: x }))] }));
      });
    },
    1927: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return f;
        },
      });
      var o = t(7294),
        n = t(7462),
        a = t(4819),
        i = t(6760);
      var s =
          "function" === typeof Symbol && Symbol.for
            ? Symbol.for("mui.nested")
            : "__THEME_NESTED__",
        l = t(5893);
      var u = function (e) {
          const { children: r, theme: t } = e,
            u = (0, i.Z)(),
            c = o.useMemo(() => {
              const e =
                null === u
                  ? t
                  : (function (e, r) {
                      if ("function" === typeof r) return r(e);
                      return (0, n.Z)({}, e, r);
                    })(u, t);
              return null != e && (e[s] = null !== u), e;
            }, [t, u]);
          return (0, l.jsx)(a.Z.Provider, { value: c, children: r });
        },
        c = t(4880),
        d = t(9718);
      function p(e) {
        const r = (0, d.Z)();
        return (0, l.jsx)(c.T.Provider, {
          value: "object" === typeof r ? r : {},
          children: e.children,
        });
      }
      var f = function (e) {
        const { children: r, theme: t } = e;
        return (0, l.jsx)(u, {
          theme: t,
          children: (0, l.jsx)(p, { children: r }),
        });
      };
    },
    7285: function (e, r, t) {
      "use strict";
      var o;
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.AmpStateContext = void 0);
      var n = (
        (o = t(7294)) && o.__esModule ? o : { default: o }
      ).default.createContext({});
      r.AmpStateContext = n;
    },
    9546: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.isInAmpMode = i),
        (r.useAmp = function () {
          return i(n.default.useContext(a.AmpStateContext));
        });
      var o,
        n = (o = t(7294)) && o.__esModule ? o : { default: o },
        a = t(7285);
      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = e.ampFirst,
          t = void 0 !== r && r,
          o = e.hybrid,
          n = void 0 !== o && o,
          a = e.hasQuery,
          i = void 0 !== a && a;
        return t || (n && i);
      }
    },
    6505: function (e, r, t) {
      "use strict";
      var o = t(930);
      function n(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.defaultHead = d),
        (r.default = void 0);
      var a,
        i = (function (e) {
          if (e && e.__esModule) return e;
          var r = {};
          if (null != e)
            for (var t in e)
              if (Object.prototype.hasOwnProperty.call(e, t)) {
                var o =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, t)
                    : {};
                o.get || o.set ? Object.defineProperty(r, t, o) : (r[t] = e[t]);
              }
          return (r.default = e), r;
        })(t(7294)),
        s = (a = t(148)) && a.__esModule ? a : { default: a },
        l = t(7285),
        u = t(523),
        c = t(9546);
      t(7206);
      function d() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          r = [i.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            r.push(
              i.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          r
        );
      }
      function p(e, r) {
        return "string" === typeof r || "number" === typeof r
          ? e
          : r.type === i.default.Fragment
          ? e.concat(
              i.default.Children.toArray(r.props.children).reduce(function (
                e,
                r
              ) {
                return "string" === typeof r || "number" === typeof r
                  ? e
                  : e.concat(r);
              },
              [])
            )
          : e.concat(r);
      }
      var f = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(e, r) {
        return e
          .reduce(function (e, r) {
            var t = i.default.Children.toArray(r.props.children);
            return e.concat(t);
          }, [])
          .reduce(p, [])
          .reverse()
          .concat(d(r.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                r = new Set(),
                t = new Set(),
                o = {};
              return function (n) {
                var a = !0,
                  i = !1;
                if (
                  n.key &&
                  "number" !== typeof n.key &&
                  n.key.indexOf("$") > 0
                ) {
                  i = !0;
                  var s = n.key.slice(n.key.indexOf("$") + 1);
                  e.has(s) ? (a = !1) : e.add(s);
                }
                switch (n.type) {
                  case "title":
                  case "base":
                    r.has(n.type) ? (a = !1) : r.add(n.type);
                    break;
                  case "meta":
                    for (var l = 0, u = f.length; l < u; l++) {
                      var c = f[l];
                      if (n.props.hasOwnProperty(c))
                        if ("charSet" === c) t.has(c) ? (a = !1) : t.add(c);
                        else {
                          var d = n.props[c],
                            p = o[c] || new Set();
                          ("name" === c && i) || !p.has(d)
                            ? (p.add(d), (o[c] = p))
                            : (a = !1);
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var a = e.key || t;
            if (
              !r.inAmpMode &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some(function (r) {
                return e.props.href.startsWith(r);
              })
            ) {
              var s = (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var t = null != arguments[r] ? arguments[r] : {};
                  r % 2
                    ? n(Object(t), !0).forEach(function (r) {
                        o(e, r, t[r]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(t)
                      )
                    : n(Object(t)).forEach(function (r) {
                        Object.defineProperty(
                          e,
                          r,
                          Object.getOwnPropertyDescriptor(t, r)
                        );
                      });
                }
                return e;
              })({}, e.props || {});
              return (
                (s["data-href"] = s.href),
                (s.href = void 0),
                (s["data-optimized-fonts"] = !0),
                i.default.cloneElement(e, s)
              );
            }
            return i.default.cloneElement(e, { key: a });
          });
      }
      var h = function (e) {
        var r = e.children,
          t = i.useContext(l.AmpStateContext),
          o = i.useContext(u.HeadManagerContext);
        return i.default.createElement(
          s.default,
          {
            reduceComponentsToState: m,
            headManager: o,
            inAmpMode: c.isInAmpMode(t),
          },
          r
        );
      };
      r.default = h;
    },
    148: function (e, r, t) {
      "use strict";
      var o = t(7980),
        n = t(3227),
        a = t(8361),
        i = (t(2191), t(5971)),
        s = t(2715),
        l = t(1193);
      function u(e) {
        var r = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            o = l(e);
          if (r) {
            var n = l(this).constructor;
            t = Reflect.construct(o, arguments, n);
          } else t = o.apply(this, arguments);
          return s(this, t);
        };
      }
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0);
      var c = (function (e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
          for (var t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) {
              var o =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(e, t)
                  : {};
              o.get || o.set ? Object.defineProperty(r, t, o) : (r[t] = e[t]);
            }
        return (r.default = e), r;
      })(t(7294));
      var d = (function (e) {
        i(t, e);
        var r = u(t);
        function t(e) {
          var a;
          return (
            n(this, t),
            ((a = r.call(this, e)).emitChange = function () {
              a._hasHeadManager &&
                a.props.headManager.updateHead(
                  a.props.reduceComponentsToState(
                    o(a.props.headManager.mountedInstances),
                    a.props
                  )
                );
            }),
            (a._hasHeadManager =
              a.props.headManager && a.props.headManager.mountedInstances),
            a
          );
        }
        return (
          a(t, [
            {
              key: "componentDidMount",
              value: function () {
                this._hasHeadManager &&
                  this.props.headManager.mountedInstances.add(this),
                  this.emitChange();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.emitChange();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this._hasHeadManager &&
                  this.props.headManager.mountedInstances.delete(this),
                  this.emitChange();
              },
            },
            {
              key: "render",
              value: function () {
                return null;
              },
            },
          ]),
          t
        );
      })(c.Component);
      r.default = d;
    },
    9008: function (e, r, t) {
      e.exports = t(6505);
    },
  },
]);
