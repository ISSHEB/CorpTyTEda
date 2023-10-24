(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [176],
  {
    2074: function (e, n) {
      "use strict";
      var t = {
        delay: 4e3,
        playOnInit: !0,
        stopOnInteraction: !0,
        stopOnMouseEnter: !1,
        stopOnLastSnap: !1,
      };
      function r(e, n) {
        var o,
          i = Object.assign({}, t, r.globalOptions, e),
          u = i.playOnInit,
          a = i.stopOnInteraction,
          c = i.stopOnMouseEnter,
          s = i.stopOnLastSnap,
          f = i.delay,
          d = a ? p : m,
          l = 0;
        function p() {
          o.off("pointerDown", d), a || o.off("pointerUp", g), m(), (l = 0);
        }
        function v() {
          m(), (l = window.setTimeout(h, f));
        }
        function m() {
          l && window.clearTimeout(l);
        }
        function g() {
          l && (m(), v());
        }
        function h() {
          var e = o.internalEngine().index;
          if (s && e.get() === e.max) return p();
          o.canScrollNext() ? o.scrollNext() : o.scrollTo(0), v();
        }
        return {
          name: "Autoplay",
          options: i,
          init: function (e) {
            var t = (o = e).internalEngine().eventStore,
              r = o.rootNode(),
              i = (n && n(r)) || r;
            o.on("pointerDown", d),
              a || o.on("pointerUp", g),
              c && (t.add(i, "mouseenter", d), a || t.add(i, "mouseleave", g)),
              t.add(document, "visibilitychange", function () {
                if ("hidden" === document.visibilityState) return m();
                g();
              }),
              t.add(window, "pagehide", function (e) {
                e.persisted && m();
              }),
              u && v();
          },
          destroy: p,
          play: v,
          stop: m,
          reset: g,
        };
      }
      (r.globalOptions = void 0), (n.Z = r);
    },
    5585: function (e, n, t) {
      "use strict";
      var r = t(7294);
      function o(e, n) {
        return (
          Object.keys(e).length === Object.keys(n).length &&
          Object.keys(e).every(function (t) {
            return (
              !!Object.prototype.hasOwnProperty.call(n, t) && e[t] === n[t]
            );
          })
        );
      }
      function i(e) {
        return e
          .concat()
          .sort(function (e, n) {
            return e.name > n.name ? 1 : -1;
          })
          .map(function (e) {
            return e.options;
          });
      }
      function u(e, n) {
        var t = {
          start: function () {
            return 0;
          },
          center: function (e) {
            return r(e) / 2;
          },
          end: r,
        };
        function r(e) {
          return n - e;
        }
        return {
          measure: function (r) {
            return "number" === typeof e ? n * Number(e) : t[e](r);
          },
        };
      }
      function a(e) {
        return Math.abs(e);
      }
      function c(e) {
        return e ? e / a(e) : 0;
      }
      function s(e, n) {
        return a(e - n);
      }
      function f(e, n) {
        for (var t = [], r = 0; r < e.length; r += n) t.push(e.slice(r, r + n));
        return t;
      }
      function d(e) {
        return Object.keys(e).map(Number);
      }
      function l(e) {
        return e[p(e)];
      }
      function p(e) {
        return Math.max(0, e.length - 1);
      }
      function v(e, n) {
        var t = a(e - n);
        function r(n) {
          return n < e;
        }
        function o(e) {
          return e > n;
        }
        function i(e) {
          return r(e) || o(e);
        }
        return {
          length: t,
          max: n,
          min: e,
          constrain: function (t) {
            return i(t) ? (r(t) ? e : n) : t;
          },
          reachedAny: i,
          reachedMax: o,
          reachedMin: r,
          removeOffset: function (e) {
            return t ? e - t * Math.ceil((e - n) / t) : e;
          },
        };
      }
      function m(e, n, t) {
        var r = v(0, e),
          o = r.min,
          i = r.constrain,
          u = e + 1,
          c = s(n);
        function s(e) {
          return t ? a((u + e) % u) : i(e);
        }
        function f() {
          return c;
        }
        function d(e) {
          return (c = s(e)), l;
        }
        var l = {
          add: function (e) {
            return d(f() + e);
          },
          clone: function () {
            return m(e, f(), t);
          },
          get: f,
          set: d,
          min: o,
          max: e,
        };
        return l;
      }
      function g() {
        var e = [];
        var n = {
          add: function (t, r, o, i) {
            return (
              void 0 === i && (i = !1),
              t.addEventListener(r, o, i),
              e.push(function () {
                return t.removeEventListener(r, o, i);
              }),
              n
            );
          },
          removeAll: function () {
            return (
              (e = e.filter(function (e) {
                return e();
              })),
              n
            );
          },
        };
        return n;
      }
      function h(e) {
        var n = e;
        function t(e) {
          return (n /= e), o;
        }
        function r(e) {
          return "number" === typeof e ? e : e.get();
        }
        var o = {
          add: function (e) {
            return (n += r(e)), o;
          },
          divide: t,
          get: function () {
            return n;
          },
          multiply: function (e) {
            return (n *= e), o;
          },
          normalize: function () {
            return 0 !== n && t(n), o;
          },
          set: function (e) {
            return (n = r(e)), o;
          },
          subtract: function (e) {
            return (n -= r(e)), o;
          },
        };
        return o;
      }
      function y(e, n, t, r, o, i, u, f, d, l, p, v, m, y, b) {
        var x = e.cross,
          O = ["INPUT", "SELECT", "TEXTAREA"],
          w = h(0),
          S = g(),
          M = g(),
          A = { mouse: 300, touch: 400 },
          E = { mouse: 500, touch: 600 },
          P = o ? 5 : 16,
          j = 0,
          k = 0,
          I = !1,
          C = !1,
          T = !1,
          _ = !1;
        function D(e) {
          if (!(_ = "mousedown" === e.type) || 0 === e.button) {
            var n = s(r.get(), u.get()) >= 2,
              o = _ || !n,
              a = !(function (e) {
                var n = e.nodeName || "";
                return O.indexOf(n) > -1;
              })(e.target),
              c = n || (_ && a);
            (I = !0),
              i.pointerDown(e),
              w.set(r),
              r.set(u),
              l.useBaseMass().useSpeed(80),
              (function () {
                var e = _ ? document : t;
                M.add(e, "touchmove", B)
                  .add(e, "touchend", N)
                  .add(e, "mousemove", B)
                  .add(e, "mouseup", N);
              })(),
              (j = i.readPoint(e)),
              (k = i.readPoint(e, x)),
              m.emit("pointerDown"),
              o && (T = !1),
              c && e.preventDefault();
          }
        }
        function B(e) {
          if (!C && !_) {
            if (!e.cancelable) return N(e);
            var t = i.readPoint(e),
              o = i.readPoint(e, x),
              u = s(t, j),
              a = s(o, k);
            if (!(C = u > a) && !T) return N(e);
          }
          var c = i.pointerMove(e);
          !T && c && (T = !0), f.start(), r.add(n.apply(c)), e.preventDefault();
        }
        function N(e) {
          var t = p.byDistance(0, !1).index !== v.get(),
            u = i.pointerUp(e) * (o ? E : A)[_ ? "mouse" : "touch"],
            f = (function (e, n) {
              var t = v.clone().add(-1 * c(e)),
                r = t.get() === v.min || t.get() === v.max,
                i = p.byDistance(e, !o).distance;
              return o || a(e) < 20
                ? i
                : !y && r
                ? 0.4 * i
                : b && n
                ? 0.5 * i
                : p.byIndex(t.get(), 0).distance;
            })(n.apply(u), t),
            g = (function (e, n) {
              if (0 === e || 0 === n) return 0;
              if (a(e) <= a(n)) return 0;
              var t = s(a(e), a(n));
              return a(t / e);
            })(u, f),
            h = s(r.get(), w.get()) >= 0.5,
            x = t && g > 0.75,
            O = a(u) < 20,
            S = x ? 10 : P,
            j = x ? 1 + 2.5 * g : 1;
          h && !_ && (T = !0),
            (C = !1),
            (I = !1),
            M.removeAll(),
            l.useSpeed(O ? 9 : S).useMass(j),
            d.distance(f, !o),
            (_ = !1),
            m.emit("pointerUp");
        }
        function L(e) {
          T && e.preventDefault();
        }
        return {
          addActivationEvents: function () {
            var e = t;
            S.add(e, "touchmove", function () {})
              .add(e, "touchend", function () {})
              .add(e, "touchstart", D)
              .add(e, "mousedown", D)
              .add(e, "touchcancel", N)
              .add(e, "contextmenu", N)
              .add(e, "click", L);
          },
          clickAllowed: function () {
            return !T;
          },
          pointerDown: function () {
            return I;
          },
          removeAllEvents: function () {
            S.removeAll(), M.removeAll();
          },
        };
      }
      function b(e, n, t) {
        var r = (function (e) {
            var n = Math.pow(10, e);
            return function (e) {
              return Math.round(e * n) / n;
            };
          })(2),
          o = h(0),
          i = h(0),
          u = h(0),
          a = 0,
          s = n,
          f = t;
        function d(e) {
          return (s = e), p;
        }
        function l(e) {
          return (f = e), p;
        }
        var p = {
          direction: function () {
            return a;
          },
          seek: function (n) {
            u.set(n).subtract(e);
            var t,
              r,
              d,
              l,
              v =
                ((t = u.get()),
                (d = 0) + ((t - (r = 0)) / (100 - r)) * (s - d));
            return (
              (a = c(u.get())),
              u.normalize().multiply(v).subtract(o),
              (l = u).divide(f),
              i.add(l),
              p
            );
          },
          settle: function (n) {
            var t = n.get() - e.get(),
              o = !r(t);
            return o && e.set(n), o;
          },
          update: function () {
            o.add(i), e.add(o), i.multiply(0);
          },
          useBaseMass: function () {
            return l(t);
          },
          useBaseSpeed: function () {
            return d(n);
          },
          useMass: l,
          useSpeed: d,
        };
        return p;
      }
      function x(e, n, t, r) {
        var o = !1;
        return {
          constrain: function (i) {
            if (!o && e.reachedAny(t.get()) && e.reachedAny(n.get())) {
              var u = e.reachedMin(n.get()) ? "min" : "max",
                c = a(e[u] - n.get()),
                s = t.get() - n.get(),
                f = Math.min(c / 50, 0.85);
              t.subtract(s * f),
                !i &&
                  a(s) < 10 &&
                  (t.set(e.constrain(t.get())), r.useSpeed(10).useMass(3));
            }
          },
          toggleActive: function (e) {
            o = !e;
          },
        };
      }
      function O(e, n, t, r, o) {
        var i = v(-n + e, t[0]),
          u = r.map(i.constrain);
        return {
          snapsContained: (function () {
            if (n <= e) return [i.max];
            if ("keepSnaps" === o) return u;
            var t = (function () {
                var e = u[0],
                  n = l(u),
                  t = u.lastIndexOf(e),
                  r = u.indexOf(n) + 1;
                return v(t, r);
              })(),
              r = t.min,
              a = t.max;
            return u.slice(r, a);
          })(),
        };
      }
      function w(e, n, t, r, o) {
        var i = v(t.min + n.measure(0.1), t.max + n.measure(0.1)),
          u = i.reachedMin,
          a = i.reachedMax;
        return {
          loop: function (n) {
            if (
              (function (e) {
                return 1 === e ? a(r.get()) : -1 === e && u(r.get());
              })(n)
            ) {
              var t = e * (-1 * n);
              o.forEach(function (e) {
                return e.add(t);
              });
            }
          },
        };
      }
      function S(e) {
        var n = e.max,
          t = e.length;
        return {
          get: function (e) {
            return (e - n) / -t;
          },
        };
      }
      function M(e, n, t, r, o, i) {
        var u = e.startEdge,
          c = e.endEdge,
          s = o
            .map(function (e) {
              return r[u] - e[u];
            })
            .map(t.measure)
            .map(function (e) {
              return -a(e);
            }),
          d = (function () {
            var e = f(s, i).map(function (e) {
                return e[0];
              }),
              r = f(o, i)
                .map(function (e) {
                  return l(e)[c] - e[0][u];
                })
                .map(t.measure)
                .map(a)
                .map(n.measure);
            return e.map(function (e, n) {
              return e + r[n];
            });
          })();
        return { snaps: s, snapsAligned: d };
      }
      function A(e, n, t, r, o) {
        var i = r.reachedAny,
          u = r.removeOffset,
          c = r.constrain;
        function s(e, n) {
          return a(e) < a(n) ? e : n;
        }
        function f(n, r) {
          var o = n,
            i = n + t,
            u = n - t;
          return e ? (r ? a(s(o, 1 === r ? i : u)) * r : s(s(o, i), u)) : o;
        }
        return {
          byDistance: function (t, r) {
            var s = o.get() + t,
              d = (function (t) {
                var r = e ? u(t) : c(t);
                return {
                  index: n
                    .map(function (e) {
                      return e - r;
                    })
                    .map(function (e) {
                      return f(e, 0);
                    })
                    .map(function (e, n) {
                      return { diff: e, index: n };
                    })
                    .sort(function (e, n) {
                      return a(e.diff) - a(n.diff);
                    })[0].index,
                  distance: r,
                };
              })(s),
              l = d.index,
              p = d.distance,
              v = !e && i(s);
            return !r || v
              ? { index: l, distance: t }
              : { index: l, distance: t + f(n[l] - p, 0) };
          },
          byIndex: function (e, t) {
            return { index: e, distance: f(n[e] - o.get(), t) };
          },
          shortcut: f,
        };
      }
      function E(e, n, t, r, o, i, u, a) {
        var c = d(r),
          s = d(r).reverse(),
          f = (function () {
            var e = o[0] - 1;
            return v(p(s, e), "end");
          })().concat(
            (function () {
              var e = n - o[0] - 1;
              return v(p(c, e), "start");
            })()
          );
        function l(e, n) {
          return e.reduce(function (e, n) {
            return e - r[n];
          }, n);
        }
        function p(e, n) {
          return e.reduce(function (e, t) {
            return l(e, n) > 0 ? e.concat([t]) : e;
          }, []);
        }
        function v(e, n) {
          var r = "start" === n,
            o = r ? -t : t,
            a = i.findSlideBounds([o]);
          return e.map(function (e) {
            var n = r ? 0 : -t,
              o = r ? t : 0,
              i = a.filter(function (n) {
                return n.index === e;
              })[0][r ? "end" : "start"];
            return {
              point: i,
              getTarget: function () {
                return u.get() > i ? n : o;
              },
              index: e,
              location: -1,
            };
          });
        }
        return {
          canLoop: function () {
            return f.every(function (e) {
              var t = e.index;
              return (
                l(
                  c.filter(function (e) {
                    return e !== t;
                  }),
                  n
                ) <= 0
              );
            });
          },
          clear: function () {
            f.forEach(function (n) {
              var t = n.index;
              a[t].style[e.startEdge] = "";
            });
          },
          loop: function () {
            f.forEach(function (n) {
              var t = n.getTarget,
                r = n.location,
                o = n.index,
                i = t();
              i !== r &&
                ((a[o].style[e.startEdge] = i + "%"), (n.location = i));
            });
          },
          loopPoints: f,
        };
      }
      function P(e, n, t) {
        var r =
            "x" === e.scroll
              ? function (e) {
                  return "translate3d(" + e + "%,0px,0px)";
                }
              : function (e) {
                  return "translate3d(0px," + e + "%,0px)";
                },
          o = t.style,
          i = !1;
        return {
          clear: function () {
            o.transform = "";
          },
          to: function (e) {
            i || (o.transform = r(n.apply(e.get())));
          },
          toggleActive: function (e) {
            i = !e;
          },
        };
      }
      function j(e, n, t, r, o) {
        var i,
          c = r.align,
          s = r.axis,
          f = r.direction,
          j = r.startIndex,
          k = r.inViewThreshold,
          I = r.loop,
          C = r.speed,
          T = r.dragFree,
          _ = r.slidesToScroll,
          D = r.skipSnaps,
          B = r.containScroll,
          N = n.getBoundingClientRect(),
          L = t.map(function (e) {
            return e.getBoundingClientRect();
          }),
          z = (function (e) {
            var n = "rtl" === e ? -1 : 1;
            return {
              apply: function (e) {
                return e * n;
              },
            };
          })(f),
          R = (function (e, n) {
            var t = "y" === e ? "y" : "x";
            return {
              scroll: t,
              cross: "y" === e ? "x" : "y",
              startEdge: "y" === t ? "top" : "rtl" === n ? "right" : "left",
              endEdge: "y" === t ? "bottom" : "rtl" === n ? "left" : "right",
              measureSize: function (e) {
                var n = e.width,
                  r = e.height;
                return "x" === t ? n : r;
              },
            };
          })(s, f),
          H =
            ((i = R.measureSize(N)),
            {
              measure: function (e) {
                return 0 === i ? 0 : (e / i) * 100;
              },
              totalPercent: 100,
            }),
          Z = H.totalPercent,
          U = u(c, Z),
          F = (function (e, n, t, r, o) {
            var i = e.measureSize,
              u = e.startEdge,
              c = e.endEdge,
              s = r.map(i);
            return {
              slideSizes: s.map(n.measure),
              slideSizesWithGaps: r
                .map(function (e, n, r) {
                  var i = n === p(r),
                    a = window.getComputedStyle(l(t)),
                    f = parseFloat(a.getPropertyValue("margin-" + c));
                  return i ? s[n] + (o ? f : 0) : r[n + 1][u] - e[u];
                })
                .map(n.measure)
                .map(a),
            };
          })(R, H, t, L, I),
          V = F.slideSizes,
          W = F.slideSizesWithGaps,
          $ = M(R, U, H, N, L, _),
          q = $.snaps,
          G = $.snapsAligned,
          X = -l(q) + l(W),
          J = O(Z, X, q, G, B).snapsContained,
          Q = !I && "" !== B ? J : G,
          Y = (function (e, n, t) {
            return {
              limit: (function () {
                var r = n[0],
                  o = l(n);
                return v(t ? r - e : o, r);
              })(),
            };
          })(X, Q, I).limit,
          K = m(p(Q), j, I),
          ee = K.clone(),
          ne = d(t),
          te = (function (e) {
            var n = 0;
            function t(e, t) {
              return function () {
                e === !!n && t();
              };
            }
            function r() {
              n = window.requestAnimationFrame(e);
            }
            return {
              proceed: t(!0, r),
              start: t(!1, r),
              stop: t(!0, function () {
                window.cancelAnimationFrame(n), (n = 0);
              }),
            };
          })(function () {
            I || de.scrollBounds.constrain(de.dragHandler.pointerDown()),
              de.scrollBody.seek(ie).update();
            var e = de.scrollBody.settle(ie);
            e &&
              !de.dragHandler.pointerDown() &&
              (de.animation.stop(), o.emit("settle")),
              e || o.emit("scroll"),
              I &&
                (de.scrollLooper.loop(de.scrollBody.direction()),
                de.slideLooper.loop()),
              de.translate.to(oe),
              de.animation.proceed();
          }),
          re = Q[K.get()],
          oe = h(re),
          ie = h(re),
          ue = b(oe, C, 1),
          ae = A(I, Q, X, Y, ie),
          ce = (function (e, n, t, r, o, i) {
            function u(r) {
              var u = r.distance,
                a = r.index !== n.get();
              u && (e.start(), o.add(u)),
                a && (t.set(n.get()), n.set(r.index), i.emit("select"));
            }
            return {
              distance: function (e, n) {
                u(r.byDistance(e, n));
              },
              index: function (e, t) {
                var o = n.clone().set(e);
                u(r.byIndex(o.get(), t));
              },
            };
          })(te, K, ee, ae, ie, o),
          se = (function (e, n, t, r, o, i, u) {
            var a = o.removeOffset,
              c = o.constrain,
              s = Math.min(Math.max(u, 0.01), 0.99),
              f = i ? [0, n, -n] : [0],
              d = l(f, s);
            function l(n, o) {
              var i = n || f,
                u = o || 0,
                a = t.map(function (e) {
                  return e * u;
                });
              return i.reduce(function (n, o) {
                var i = r.map(function (n, r) {
                  return {
                    start: n - t[r] + a[r] + o,
                    end: n + e - a[r] + o,
                    index: r,
                  };
                });
                return n.concat(i);
              }, []);
            }
            return {
              check: function (e, n) {
                var t = i ? a(e) : c(e);
                return (n || d).reduce(function (e, n) {
                  var r = n.index,
                    o = n.start,
                    i = n.end;
                  return -1 === e.indexOf(r) && o < t && i > t
                    ? e.concat([r])
                    : e;
                }, []);
              },
              findSlideBounds: l,
            };
          })(Z, X, V, q, Y, I, k),
          fe = y(
            R,
            z,
            e,
            ie,
            T,
            (function (e, n) {
              var t, r;
              function o(e) {
                return (
                  "undefined" !== typeof TouchEvent && e instanceof TouchEvent
                );
              }
              function i(e) {
                return e.timeStamp;
              }
              function u(n, t) {
                var r = "client" + ("x" === (t || e.scroll) ? "X" : "Y");
                return (o(n) ? n.touches[0] : n)[r];
              }
              return {
                isTouchEvent: o,
                pointerDown: function (e) {
                  return (t = e), (r = e), n.measure(u(e));
                },
                pointerMove: function (e) {
                  var o = u(e) - u(r),
                    a = i(e) - i(t) > 170;
                  return (r = e), a && (t = e), n.measure(o);
                },
                pointerUp: function (e) {
                  if (!t || !r) return 0;
                  var o = u(r) - u(t),
                    c = i(e) - i(t),
                    s = i(e) - i(r) > 170,
                    f = o / c;
                  return c && !s && a(f) > 0.1 ? n.measure(f) : 0;
                },
                readPoint: u,
              };
            })(R, H),
            oe,
            te,
            ce,
            ue,
            ae,
            K,
            o,
            I,
            D
          ),
          de = {
            containerRect: N,
            slideRects: L,
            animation: te,
            axis: R,
            direction: z,
            dragHandler: fe,
            eventStore: g(),
            pxToPercent: H,
            index: K,
            indexPrevious: ee,
            limit: Y,
            location: oe,
            options: r,
            scrollBody: ue,
            scrollBounds: x(Y, oe, ie, ue),
            scrollLooper: w(X, H, Y, oe, [oe, ie]),
            scrollProgress: S(Y),
            scrollSnaps: Q,
            scrollTarget: ae,
            scrollTo: ce,
            slideLooper: E(R, Z, X, W, Q, se, oe, t),
            slidesInView: se,
            slideIndexes: ne,
            target: ie,
            translate: P(R, z, n),
          };
        return de;
      }
      var k = {
        align: "center",
        axis: "x",
        containScroll: "",
        direction: "ltr",
        dragFree: !1,
        draggable: !0,
        inViewThreshold: 0,
        loop: !1,
        skipSnaps: !1,
        slidesToScroll: 1,
        speed: 10,
        startIndex: 0,
      };
      function I(e, n, t) {
        var r,
          o,
          i,
          u,
          a,
          c,
          s = (function () {
            var e = {};
            function n(n) {
              return e[n] || [];
            }
            var t = {
              emit: function (e) {
                return (
                  n(e).forEach(function (n) {
                    return n(e);
                  }),
                  t
                );
              },
              off: function (r, o) {
                return (
                  (e[r] = n(r).filter(function (e) {
                    return e !== o;
                  })),
                  t
                );
              },
              on: function (r, o) {
                return (e[r] = n(r).concat([o])), t;
              },
            };
            return t;
          })(),
          f = (function (e, n) {
            var t = 0;
            return function () {
              window.clearTimeout(t), (t = window.setTimeout(e, n) || 0);
            };
          })(function () {
            if (!v) return;
            var e = r.axis.measureSize(u.getBoundingClientRect());
            h !== e && x();
            s.emit("resize");
          }, 500),
          d = x,
          l = s.on,
          p = s.off,
          v = !1,
          m = Object.assign({}, k, I.globalOptions),
          g = Object.assign({}, m),
          h = 0;
        function y() {
          var n = "container" in e && e.container,
            t = "slides" in e && e.slides;
          (u = "root" in e ? e.root : e),
            (a = n || u.children[0]),
            (c = t || [].slice.call(a.children)),
            (o = (function (e) {
              var n = getComputedStyle(e, ":before").content;
              return {
                get: function () {
                  try {
                    return JSON.parse(n.slice(1, -1).replace(/\\/g, ""));
                  } catch (e) {}
                  return {};
                },
              };
            })(u));
        }
        function b(e, n) {
          if (
            (y(),
            (m = Object.assign({}, m, e)),
            (g = Object.assign({}, m, o.get())),
            (i = Object.assign([], n)),
            (r = j(u, a, c, g, s)).eventStore.add(window, "resize", f),
            r.translate.to(r.location),
            (h = r.axis.measureSize(u.getBoundingClientRect())),
            i.forEach(function (e) {
              return e.init(A);
            }),
            g.loop)
          ) {
            if (!r.slideLooper.canLoop()) return O(), b({ loop: !1 }, n);
            r.slideLooper.loop();
          }
          g.draggable &&
            a.offsetParent &&
            c.length &&
            r.dragHandler.addActivationEvents(),
            v ||
              (setTimeout(function () {
                return s.emit("init");
              }, 0),
              (v = !0));
        }
        function x(e, n) {
          if (v) {
            var t = M(),
              r = Object.assign({ startIndex: t }, e);
            O(), b(r, n || i), s.emit("reInit");
          }
        }
        function O() {
          r.dragHandler.removeAllEvents(),
            r.animation.stop(),
            r.eventStore.removeAll(),
            r.translate.clear(),
            r.slideLooper.clear(),
            i.forEach(function (e) {
              return e.destroy();
            });
        }
        function w(e) {
          var n = r[e ? "target" : "location"].get(),
            t = g.loop ? "removeOffset" : "constrain";
          return r.slidesInView.check(r.limit[t](n));
        }
        function S(e, n, t) {
          r.scrollBody.useBaseMass().useSpeed(n ? 100 : g.speed),
            v && r.scrollTo.index(e, t || 0);
        }
        function M() {
          return r.index.get();
        }
        var A = {
          canScrollNext: function () {
            return r.index.clone().add(1).get() !== M();
          },
          canScrollPrev: function () {
            return r.index.clone().add(-1).get() !== M();
          },
          clickAllowed: function () {
            return r.dragHandler.clickAllowed();
          },
          containerNode: function () {
            return a;
          },
          internalEngine: function () {
            return r;
          },
          destroy: function () {
            v && (O(), (v = !1), s.emit("destroy"));
          },
          off: p,
          on: l,
          previousScrollSnap: function () {
            return r.indexPrevious.get();
          },
          reInit: d,
          rootNode: function () {
            return u;
          },
          scrollNext: function (e) {
            S(r.index.clone().add(1).get(), !0 === e, -1);
          },
          scrollPrev: function (e) {
            S(r.index.clone().add(-1).get(), !0 === e, 1);
          },
          scrollProgress: function () {
            return r.scrollProgress.get(r.location.get());
          },
          scrollSnapList: function () {
            return r.scrollSnaps.map(r.scrollProgress.get);
          },
          scrollTo: S,
          selectedScrollSnap: M,
          slideNodes: function () {
            return c;
          },
          slidesInView: w,
          slidesNotInView: function (e) {
            var n = w(e);
            return r.slideIndexes.filter(function (e) {
              return -1 === n.indexOf(e);
            });
          },
        };
        return b(n, t), A;
      }
      function C(e, n) {
        void 0 === e && (e = {}), void 0 === n && (n = []);
        var t = (0, r.useState)(),
          u = t[0],
          a = t[1],
          c = (0, r.useState)(),
          s = c[0],
          f = c[1],
          d = (0, r.useRef)(e),
          l = (0, r.useRef)(n),
          p = (0, r.useMemo)(
            function () {
              return o(d.current, e) || (d.current = e), d.current;
            },
            [d, e]
          ),
          v = (0, r.useMemo)(
            function () {
              return (
                (function (e, n) {
                  if (e.length !== n.length) return !1;
                  var t = i(e),
                    r = i(n);
                  return t.every(function (e, n) {
                    return o(e, r[n]);
                  });
                })(l.current, n) || (l.current = n),
                l.current
              );
            },
            [l, n]
          );
        return (
          (0, r.useEffect)(
            function () {
              if (
                "undefined" !== typeof window &&
                window.document &&
                window.document.createElement &&
                s
              ) {
                I.globalOptions = C.globalOptions;
                var e = I(s, p, v);
                return (
                  a(e),
                  function () {
                    return e.destroy();
                  }
                );
              }
              a(void 0);
            },
            [s, p, v, a]
          ),
          [f, u]
        );
      }
      (I.globalOptions = void 0), (C.globalOptions = void 0), (n.Z = C);
    },
    7285: function (e, n, t) {
      "use strict";
      var r;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.AmpStateContext = void 0);
      var o = (
        (r = t(7294)) && r.__esModule ? r : { default: r }
      ).default.createContext({});
      n.AmpStateContext = o;
    },
    9546: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.isInAmpMode = u),
        (n.useAmp = function () {
          return u(o.default.useContext(i.AmpStateContext));
        });
      var r,
        o = (r = t(7294)) && r.__esModule ? r : { default: r },
        i = t(7285);
      function u() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.ampFirst,
          t = void 0 !== n && n,
          r = e.hybrid,
          o = void 0 !== r && r,
          i = e.hasQuery,
          u = void 0 !== i && i;
        return t || (o && u);
      }
    },
    6505: function (e, n, t) {
      "use strict";
      var r = t(930);
      function o(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.defaultHead = d),
        (n.default = void 0);
      var i,
        u = (function (e) {
          if (e && e.__esModule) return e;
          var n = {};
          if (null != e)
            for (var t in e)
              if (Object.prototype.hasOwnProperty.call(e, t)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, t)
                    : {};
                r.get || r.set ? Object.defineProperty(n, t, r) : (n[t] = e[t]);
              }
          return (n.default = e), n;
        })(t(7294)),
        a = (i = t(148)) && i.__esModule ? i : { default: i },
        c = t(7285),
        s = t(523),
        f = t(9546);
      t(7206);
      function d() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = [u.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            n.push(
              u.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          n
        );
      }
      function l(e, n) {
        return "string" === typeof n || "number" === typeof n
          ? e
          : n.type === u.default.Fragment
          ? e.concat(
              u.default.Children.toArray(n.props.children).reduce(function (
                e,
                n
              ) {
                return "string" === typeof n || "number" === typeof n
                  ? e
                  : e.concat(n);
              },
              [])
            )
          : e.concat(n);
      }
      var p = ["name", "httpEquiv", "charSet", "itemProp"];
      function v(e, n) {
        return e
          .reduce(function (e, n) {
            var t = u.default.Children.toArray(n.props.children);
            return e.concat(t);
          }, [])
          .reduce(l, [])
          .reverse()
          .concat(d(n.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                n = new Set(),
                t = new Set(),
                r = {};
              return function (o) {
                var i = !0,
                  u = !1;
                if (
                  o.key &&
                  "number" !== typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  u = !0;
                  var a = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(a) ? (i = !1) : e.add(a);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    n.has(o.type) ? (i = !1) : n.add(o.type);
                    break;
                  case "meta":
                    for (var c = 0, s = p.length; c < s; c++) {
                      var f = p[c];
                      if (o.props.hasOwnProperty(f))
                        if ("charSet" === f) t.has(f) ? (i = !1) : t.add(f);
                        else {
                          var d = o.props[f],
                            l = r[f] || new Set();
                          ("name" === f && u) || !l.has(d)
                            ? (l.add(d), (r[f] = l))
                            : (i = !1);
                        }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var i = e.key || t;
            if (
              !n.inAmpMode &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some(function (n) {
                return e.props.href.startsWith(n);
              })
            ) {
              var a = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = null != arguments[n] ? arguments[n] : {};
                  n % 2
                    ? o(Object(t), !0).forEach(function (n) {
                        r(e, n, t[n]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(t)
                      )
                    : o(Object(t)).forEach(function (n) {
                        Object.defineProperty(
                          e,
                          n,
                          Object.getOwnPropertyDescriptor(t, n)
                        );
                      });
                }
                return e;
              })({}, e.props || {});
              return (
                (a["data-href"] = a.href),
                (a.href = void 0),
                (a["data-optimized-fonts"] = !0),
                u.default.cloneElement(e, a)
              );
            }
            return u.default.cloneElement(e, { key: i });
          });
      }
      var m = function (e) {
        var n = e.children,
          t = u.useContext(c.AmpStateContext),
          r = u.useContext(s.HeadManagerContext);
        return u.default.createElement(
          a.default,
          {
            reduceComponentsToState: v,
            headManager: r,
            inAmpMode: f.isInAmpMode(t),
          },
          n
        );
      };
      n.default = m;
    },
    148: function (e, n, t) {
      "use strict";
      var r = t(7980),
        o = t(3227),
        i = t(8361),
        u = (t(2191), t(5971)),
        a = t(2715),
        c = t(1193);
      function s(e) {
        var n = (function () {
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
            r = c(e);
          if (n) {
            var o = c(this).constructor;
            t = Reflect.construct(r, arguments, o);
          } else t = r.apply(this, arguments);
          return a(this, t);
        };
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var f = (function (e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (null != e)
          for (var t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) {
              var r =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(e, t)
                  : {};
              r.get || r.set ? Object.defineProperty(n, t, r) : (n[t] = e[t]);
            }
        return (n.default = e), n;
      })(t(7294));
      var d = (function (e) {
        u(t, e);
        var n = s(t);
        function t(e) {
          var i;
          return (
            o(this, t),
            ((i = n.call(this, e)).emitChange = function () {
              i._hasHeadManager &&
                i.props.headManager.updateHead(
                  i.props.reduceComponentsToState(
                    r(i.props.headManager.mountedInstances),
                    i.props
                  )
                );
            }),
            (i._hasHeadManager =
              i.props.headManager && i.props.headManager.mountedInstances),
            i
          );
        }
        return (
          i(t, [
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
      })(f.Component);
      n.default = d;
    },
    9008: function (e, n, t) {
      e.exports = t(6505);
    },
    2587: function (e, n, t) {
      "use strict";
      function r(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      t.d(n, {
        Z: function () {
          return r;
        },
      });
    },
    6835: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = t(2937);
      function o(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var r,
                o,
                i = [],
                u = !0,
                a = !1;
              try {
                for (
                  t = t.call(e);
                  !(u = (r = t.next()).done) &&
                  (i.push(r.value), !n || i.length !== n);
                  u = !0
                );
              } catch (c) {
                (a = !0), (o = c);
              } finally {
                try {
                  u || null == t.return || t.return();
                } finally {
                  if (a) throw o;
                }
              }
              return i;
            }
          })(e, n) ||
          (0, r.Z)(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    7812: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var r = t(2587);
      var o = t(2937);
      function i(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, r.Z)(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (0, o.Z)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    2937: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = t(2587);
      function o(e, n) {
        if (e) {
          if ("string" === typeof e) return (0, r.Z)(e, n);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === t && e.constructor && (t = e.constructor.name),
            "Map" === t || "Set" === t
              ? Array.from(e)
              : "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? (0, r.Z)(e, n)
              : void 0
          );
        }
      }
    },
  },
]);
