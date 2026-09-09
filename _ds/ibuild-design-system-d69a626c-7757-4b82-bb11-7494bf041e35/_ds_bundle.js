/* @ds-bundle: {"format":4,"namespace":"IBUILDDesignSystem_d69a62","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"CostTable","sourcePath":"components/data/CostTable.jsx"},{"name":"MetricStat","sourcePath":"components/data/MetricStat.jsx"},{"name":"ProgressRow","sourcePath":"components/data/ProgressRow.jsx"},{"name":"StatBig","sourcePath":"components/data/StatBig.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"ToggleRow","sourcePath":"components/forms/ToggleRow.jsx"},{"name":"BlogCard","sourcePath":"components/marketing/BlogCard.jsx"},{"name":"Marquee","sourcePath":"components/marketing/Marquee.jsx"},{"name":"PillarCard","sourcePath":"components/marketing/PillarCard.jsx"},{"name":"QuoteBlock","sourcePath":"components/marketing/QuoteBlock.jsx"},{"name":"JourneyStep","sourcePath":"components/navigation/JourneyStep.jsx"},{"name":"StepRail","sourcePath":"components/navigation/StepRail.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"e323a67a1825","components/core/Button.jsx":"cb404ee98c15","components/core/Card.jsx":"c00578fcdddb","components/core/Chip.jsx":"d4486d170375","components/core/Eyebrow.jsx":"e251ad15d759","components/core/Icon.jsx":"2335d9b2ae95","components/core/SectionHeading.jsx":"d25bd68c5c70","components/data/CostTable.jsx":"a73144823d15","components/data/MetricStat.jsx":"baf0e0e493f4","components/data/ProgressRow.jsx":"05a6159a161f","components/data/StatBig.jsx":"b2f947f042b4","components/forms/Field.jsx":"3470a51cc9f9","components/forms/RadioGroup.jsx":"601235e3f2ef","components/forms/Select.jsx":"53b75925da8f","components/forms/ToggleRow.jsx":"cb6ec6474493","components/marketing/BlogCard.jsx":"232afb3dcae1","components/marketing/Marquee.jsx":"652c62c0e6ce","components/marketing/PillarCard.jsx":"4e945e44fbc7","components/marketing/QuoteBlock.jsx":"a7ab5f46e62d","components/navigation/JourneyStep.jsx":"2d1b59888446","components/navigation/StepRail.jsx":"25c4749ba3c5","components/navigation/Tabs.jsx":"5596cd6c43e4","ui_kits/site/SiteChrome.jsx":"3867b0cc2aa2","ui_kits/site/SiteSections.jsx":"89a59618ab26","ui_kits/soe/SoePanels.jsx":"54cfbf601d69"},"inlinedExternals":[],"unexposedExports":[{"name":"iconNames","sourcePath":"components/core/Icon.jsx"}]} */

(() => {

const __ds_ns = (window.IBUILDDesignSystem_d69a62 = window.IBUILDDesignSystem_d69a62 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const ibBadgeTones = {
  neutral: {
    color: 'var(--text-muted)',
    background: 'transparent',
    borderColor: 'var(--border-strong)'
  },
  gold: {
    color: 'var(--accent)',
    background: 'rgba(200,169,110,.1)',
    borderColor: 'rgba(200,169,110,.2)'
  },
  risk: {
    color: 'var(--ib-risk)',
    background: 'rgba(200,60,60,.1)',
    borderColor: 'rgba(200,60,60,.2)'
  },
  safe: {
    color: 'var(--ib-safe)',
    background: 'rgba(60,160,80,.1)',
    borderColor: 'rgba(60,160,80,.2)'
  },
  good: {
    color: 'var(--ib-good)',
    background: 'var(--ib-good-bg)',
    borderColor: 'transparent'
  },
  danger: {
    color: 'var(--ib-danger)',
    background: 'var(--ib-danger-bg)',
    borderColor: 'transparent'
  }
};
function Badge({
  children,
  tone = 'neutral',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '6px 16px',
      fontFamily: 'var(--font-body)',
      fontSize: '.65rem',
      fontWeight: 500,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      border: '1px solid',
      borderRadius: 'var(--radius-app)',
      ...ibBadgeTones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ibBtnBase = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12,
  fontFamily: 'var(--font-body)',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: 'var(--track-cta)',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-none)',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'all var(--dur-slow) var(--ease-out-expo)',
  textDecoration: 'none'
};
const ibBtnSizes = {
  sm: {
    fontSize: '.7rem',
    padding: '10px 20px',
    letterSpacing: '2px'
  },
  md: {
    fontSize: '.8rem',
    padding: '14px 32px'
  },
  lg: {
    fontSize: '.88rem',
    padding: '20px 48px'
  }
};
const ibBtnVariants = {
  light: {
    background: 'var(--ib-white)',
    color: 'var(--ib-charcoal)',
    borderColor: 'var(--ib-white)'
  },
  dark: {
    background: 'var(--ib-ink)',
    color: 'var(--ib-white)',
    borderColor: 'var(--ib-ink)'
  },
  gold: {
    background: 'var(--accent)',
    color: 'var(--ib-ink)',
    borderColor: 'var(--accent)'
  },
  outlineDark: {
    background: 'none',
    color: 'var(--ib-charcoal)',
    borderColor: 'var(--ib-charcoal)'
  },
  outlineLight: {
    background: 'none',
    color: 'var(--ib-white)',
    borderColor: 'rgba(255,255,255,.3)'
  },
  quiet: {
    background: 'none',
    color: 'var(--text-muted)',
    borderColor: 'var(--border-strong)',
    textTransform: 'none',
    letterSpacing: '2px'
  }
};
const ibBtnHover = {
  light: {
    background: 'var(--ib-off-white-screen)',
    color: 'var(--ib-ink)'
  },
  dark: {
    background: 'var(--accent)',
    color: 'var(--ib-ink)',
    borderColor: 'var(--accent)'
  },
  gold: {
    background: 'var(--ib-gold-light)'
  },
  outlineDark: {
    background: 'var(--ib-ink)',
    color: 'var(--ib-white)',
    borderColor: 'var(--ib-ink)'
  },
  outlineLight: {
    background: 'var(--ib-white)',
    color: 'var(--ib-ink)',
    borderColor: 'var(--ib-white)'
  },
  quiet: {
    borderColor: 'var(--accent)',
    color: 'var(--accent)'
  }
};
function Button({
  children,
  variant = 'dark',
  size = 'md',
  withArrow = false,
  disabled = false,
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const css = {
    ...ibBtnBase,
    ...(ibBtnSizes[size] || ibBtnSizes.md),
    ...(ibBtnVariants[variant] || ibBtnVariants.dark),
    ...(hover && !disabled ? {
      ...ibBtnHover[variant],
      transform: 'translateY(var(--hover-lift))'
    } : null),
    ...(disabled ? {
      opacity: .4,
      cursor: 'not-allowed',
      transform: 'none'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: href ? undefined : disabled,
    style: css,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children, withArrow && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    style: {
      width: 14,
      height: 14,
      transform: hover ? 'translateX(4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out-expo)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5l7 7-7 7"
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  tone = 'light',
  accent = 'none',
  hoverLift = false,
  padding = 24,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding,
      background: dark ? 'var(--ib-ink)' : 'var(--surface-card)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-body)',
      border: '1px solid ' + (dark ? 'var(--border-hairline-inverse)' : 'var(--border-hairline)'),
      borderLeft: accent === 'left' ? '2px solid var(--accent)' : undefined,
      borderRadius: 'var(--radius-app)',
      transition: 'all var(--dur-slow) var(--ease-out-expo)',
      transform: hoverLift && hover ? 'translateY(var(--hover-lift-card))' : 'none',
      boxShadow: hoverLift && hover ? 'var(--shadow-card-hover)' : 'none',
      ...style
    }
  }, accent === 'top' && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: 'var(--rule-accent)',
      background: 'var(--accent)',
      transform: hover ? 'scaleX(1)' : 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform var(--dur-slow) var(--ease-out-expo)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function Chip({
  children,
  active = false,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '.78rem',
      letterSpacing: '.04em',
      padding: '7px 14px',
      cursor: onClick ? 'pointer' : 'default',
      border: '1px solid ' + (active ? 'var(--accent)' : 'var(--border-strong)'),
      background: active ? 'rgba(200,169,110,.12)' : 'var(--surface-card)',
      color: active ? 'var(--accent)' : 'var(--text-body)',
      borderRadius: 'var(--radius-app)',
      transition: 'all var(--dur-fast)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
const ibEyebrowCss = {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--eyebrow-size)',
  fontWeight: 'var(--eyebrow-weight)',
  letterSpacing: 'var(--eyebrow-track)',
  textTransform: 'uppercase',
  margin: 0
};
function Eyebrow({
  children,
  tone = 'accent',
  rule = false,
  style
}) {
  const color = tone === 'accent' ? 'var(--accent)' : tone === 'muted' ? 'var(--text-muted)' : 'var(--ib-gold-text)';
  return /*#__PURE__*/React.createElement("p", {
    style: {
      ...ibEyebrowCss,
      color,
      ...style
    }
  }, rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 1,
      background: 'currentColor',
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/* Paths lifted from the iBUILD site source (24px grid, 1.5 stroke, no fill). */
const ibIconPaths = {
  arrowRight: 'M5 12h14M12 5l7 7-7 7',
  arrowLeft: 'M19 12H5M12 19l-7-7 7-7',
  users: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 3a4 4 0 100 8 4 4 0 000-8 M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75',
  help: 'M12 2a10 10 0 100 20 10 10 0 000-20 M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01',
  refresh: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  lock: 'M5 11h14v10H5z M8 11V7a4 4 0 018 0v4',
  check: 'M20 6L9 17l-5-5',
  calendar: 'M4 5h16v16H4z M8 3v4M16 3v4M4 11h16',
  phone: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z'
};
function Icon({
  name = 'arrowRight',
  size = 24,
  color = 'currentColor',
  strokeWidth = 1.5,
  style
}) {
  const d = ibIconPaths[name] || ibIconPaths.arrowRight;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      width: size,
      height: size,
      flex: 'none',
      ...style
    },
    "aria-hidden": "true"
  }, d.split(' M').map((seg, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: (i ? 'M' : '') + seg
  })));
}
const iconNames = Object.keys(ibIconPaths);
Object.assign(__ds_scope, { Icon, iconNames });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: align === 'center' ? 900 : 'none',
      margin: align === 'center' ? '0 auto' : 0,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    style: {
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      marginBottom: 20
    }
  }, label), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-h2)',
      fontWeight: 500,
      lineHeight: 'var(--lh-heading)',
      margin: 0,
      color: dark ? 'var(--text-inverse)' : 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--type-body)',
      lineHeight: 'var(--lh-body)',
      color: dark ? 'var(--text-muted)' : 'var(--ib-charcoal)',
      maxWidth: 700,
      margin: align === 'center' ? '20px auto 0' : '20px 0 0'
    }
  }, description));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/data/CostTable.jsx
try { (() => {
const ibCostTh = {
  fontFamily: 'var(--font-body)',
  fontSize: '.7rem',
  fontWeight: 500,
  letterSpacing: '.1em',
  textTransform: 'uppercase',
  textAlign: 'left',
  padding: '10px 14px',
  background: 'var(--ib-ink)',
  color: 'var(--ib-white)'
};
const ibCostTd = {
  fontFamily: 'var(--font-doc)',
  fontSize: '.9rem',
  padding: '10px 14px',
  borderBottom: '1px solid var(--border-strong)',
  color: 'var(--text-strong)'
};
function CostTable({
  columns = [],
  rows = [],
  total,
  style
}) {
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontVariantNumeric: 'tabular-nums',
      ...style
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: c,
    style: {
      ...ibCostTh,
      textAlign: i ? 'right' : 'left'
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    style: {
      background: ri % 2 ? 'var(--surface-sunken)' : 'transparent'
    }
  }, r.map((cell, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      ...ibCostTd,
      textAlign: ci ? 'right' : 'left'
    }
  }, cell)))), total && /*#__PURE__*/React.createElement("tr", null, total.map((cell, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      ...ibCostTd,
      textAlign: ci ? 'right' : 'left',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      borderTop: '2px solid var(--ib-ink)',
      borderBottom: 'none'
    }
  }, cell)))));
}
Object.assign(__ds_scope, { CostTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/CostTable.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricStat.jsx
try { (() => {
function MetricStat({
  label,
  value,
  tone = 'default',
  style
}) {
  const color = tone === 'good' ? 'var(--ib-good)' : tone === 'danger' ? 'var(--ib-danger)' : 'var(--text-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 150,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '.68rem',
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.05rem',
      fontVariantNumeric: 'tabular-nums',
      color
    }
  }, value));
}
Object.assign(__ds_scope, { MetricStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricStat.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressRow.jsx
try { (() => {
function ProgressRow({
  stage,
  percent = 0,
  note,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr 70px',
      alignItems: 'center',
      gap: 14,
      padding: '11px 0',
      borderBottom: '1px solid var(--border-strong)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '.86rem',
      color: 'var(--text-strong)'
    }
  }, stage), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 8,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: '100%',
      width: percent + '%',
      background: 'var(--accent)',
      transition: 'width var(--dur-slow) var(--ease-out-expo)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-display)',
      fontSize: '.8rem',
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--text-muted)'
    }
  }, note ?? percent + '%'));
}
Object.assign(__ds_scope, { ProgressRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressRow.jsx", error: String((e && e.message) || e) }); }

// components/data/StatBig.jsx
try { (() => {
function StatBig({
  value,
  suffix = '+',
  label,
  tone = 'light',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(3rem,5vw,4.5rem)',
      fontWeight: 700,
      lineHeight: 1,
      color: tone === 'dark' ? 'var(--text-inverse)' : 'var(--text-strong)'
    }
  }, value, /*#__PURE__*/React.createElement("span", null, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontFamily: 'var(--font-body)',
      fontSize: '.85rem',
      fontWeight: 500,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBig });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatBig.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
const ibFieldLabel = {
  fontFamily: 'var(--font-body)',
  fontSize: '.68rem',
  textTransform: 'uppercase',
  letterSpacing: '.1em',
  color: 'var(--text-muted)'
};
const ibFieldInput = {
  fontFamily: 'var(--font-doc)',
  fontSize: '.95rem',
  color: 'var(--text-strong)',
  background: 'var(--surface-card)',
  border: '1px solid var(--border-strong)',
  borderRadius: 'var(--radius-app)',
  padding: '10px 12px',
  width: '100%',
  outline: 'none'
};
function Field({
  label,
  hint,
  value,
  placeholder,
  type = 'text',
  suffix,
  disabled,
  onChange,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: ibFieldLabel
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...ibFieldInput,
      borderColor: focus ? 'var(--focus-ring)' : 'var(--border-strong)',
      opacity: disabled ? .55 : 1,
      paddingRight: suffix ? 52 : 12
    }
  }), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      fontFamily: 'var(--font-display)',
      fontSize: '.78rem',
      color: 'var(--text-muted)'
    }
  }, suffix)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.74rem',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function RadioGroup({
  label,
  name,
  options = [],
  value,
  onChange,
  direction = 'row',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '.68rem',
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: direction === 'row' ? 'row' : 'column',
      gap: direction === 'row' ? 28 : 10
    }
  }, options.map(o => /*#__PURE__*/React.createElement("label", {
    key: o,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-doc)',
      fontSize: '.92rem',
      color: 'var(--text-strong)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: value === o,
    onChange: () => onChange && onChange(o),
    style: {
      accentColor: 'var(--accent)'
    }
  }), o))));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  value,
  options = [],
  hint,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '.68rem',
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      fontFamily: 'var(--font-doc)',
      fontSize: '.95rem',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-app)',
      padding: '10px 12px',
      width: '100%',
      outline: 'none'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.74rem',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/ToggleRow.jsx
try { (() => {
function ToggleRow({
  label,
  description,
  checked = false,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      padding: '14px 0',
      borderBottom: '1px solid var(--border-strong)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: '.92rem',
      color: 'var(--text-strong)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '.76rem',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, description)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    onClick: () => onChange && onChange(!checked),
    style: {
      position: 'relative',
      width: 40,
      height: 22,
      flex: 'none',
      cursor: 'pointer',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent)' : 'var(--border-strong)',
      transition: 'background var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: 'var(--ib-white)',
      transition: 'left var(--dur-fast) var(--ease-out-expo)'
    }
  })));
}
Object.assign(__ds_scope, { ToggleRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ToggleRow.jsx", error: String((e && e.message) || e) }); }

// components/marketing/BlogCard.jsx
try { (() => {
function BlogCard({
  tag,
  title,
  excerpt,
  image,
  linkLabel = 'Ler artigo',
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      overflow: 'hidden',
      transform: hover ? 'translateY(var(--hover-lift-card))' : 'none',
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'none',
      transition: 'all var(--dur-slow) var(--ease-out-expo)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 10',
      overflow: 'hidden',
      background: 'var(--surface-sunken)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(var(--media-zoom))' : 'none',
      transition: 'transform var(--dur-media) var(--ease-out-expo)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.6rem',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 12
    }
  }, tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
      margin: '0 0 12px',
      color: hover ? 'var(--ib-gold-text)' : 'var(--text-strong)',
      transition: 'color var(--dur-fast)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.85rem',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)',
      margin: '0 0 20px'
    }
  }, excerpt), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.7rem',
      fontWeight: 500,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: 'var(--ib-charcoal)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, linkLabel, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    style: {
      width: 12,
      height: 12,
      transform: hover ? 'translateX(4px)' : 'none',
      transition: 'transform var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5l7 7-7 7"
  })))));
}
Object.assign(__ds_scope, { BlogCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/BlogCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Marquee.jsx
try { (() => {
function Marquee({
  items = [],
  tone = 'dark',
  speed = 30,
  style
}) {
  const dark = tone === 'dark';
  const list = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      padding: '28px 0',
      background: dark ? 'var(--ib-ink)' : 'var(--surface-sunken)',
      borderTop: '1px solid ' + (dark ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.06)'),
      borderBottom: '1px solid ' + (dark ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.06)'),
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes ibMarquee{to{transform:translateX(-50%)}}'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 'max-content',
      animation: 'ibMarquee ' + speed + 's linear infinite'
    }
  }, list.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.4rem',
      fontWeight: 100,
      fontStyle: 'italic',
      color: dark ? 'rgba(255,255,255,.35)' : 'rgba(29,29,31,.5)',
      whiteSpace: 'nowrap',
      padding: '0 40px',
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, t, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.45rem',
      color: 'var(--accent)',
      opacity: .4
    }
  }, "\u25C6")))));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PillarCard.jsx
try { (() => {
function PillarCard({
  icon = 'shield',
  name,
  description,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    accent: "top",
    hoverLift: true,
    padding: "48px 36px",
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      marginBottom: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover ? 'var(--accent)' : 'var(--ib-charcoal)',
      transition: 'all var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-h4)',
      fontWeight: 500,
      margin: '0 0 16px',
      color: 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--type-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, description)));
}
Object.assign(__ds_scope, { PillarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PillarCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/QuoteBlock.jsx
try { (() => {
function QuoteBlock({
  quote,
  author,
  tone = 'dark',
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      textAlign: 'center',
      maxWidth: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-quote)',
      fontWeight: 100,
      fontStyle: 'italic',
      lineHeight: 1.5,
      color: dark ? 'var(--text-inverse)' : 'var(--text-strong)',
      margin: 0
    }
  }, quote), author && /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 40,
      fontFamily: 'var(--font-body)',
      fontSize: '.75rem',
      fontWeight: 500,
      letterSpacing: '4px',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, author));
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// components/navigation/JourneyStep.jsx
try { (() => {
function JourneyStep({
  n,
  name,
  state = 'todo',
  onClick,
  style
}) {
  const active = state === 'active',
    done = state === 'done';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      textAlign: 'left',
      cursor: 'pointer',
      padding: '16px 24px',
      border: 'none',
      borderLeft: '2px solid ' + (active ? 'var(--accent)' : done ? 'rgba(200,169,110,.2)' : 'transparent'),
      background: active ? 'rgba(200,169,110,.04)' : 'transparent',
      fontFamily: 'var(--font-body)',
      transition: 'all var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '.6rem',
      fontWeight: 500,
      letterSpacing: '1px',
      border: '1px solid ' + (active ? 'var(--accent)' : done ? 'rgba(200,169,110,.3)' : 'rgba(255,255,255,.1)'),
      background: active ? 'var(--accent)' : done ? 'rgba(200,169,110,.15)' : 'transparent',
      color: active ? 'var(--ib-ink)' : done ? 'var(--accent)' : 'var(--ib-gray)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.82rem',
      lineHeight: 1.3,
      fontWeight: active ? 500 : 400,
      color: active ? 'var(--accent)' : 'var(--ib-gray)'
    }
  }, name));
}
Object.assign(__ds_scope, { JourneyStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/JourneyStep.jsx", error: String((e && e.message) || e) }); }

// components/navigation/StepRail.jsx
try { (() => {
function StepRail({
  brand,
  subtitle,
  steps = [],
  activeIndex = 0,
  onSelect,
  footer,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      background: 'var(--surface-rail)',
      color: 'var(--ib-off-white)',
      padding: '28px 0 20px',
      display: 'flex',
      flexDirection: 'column',
      minWidth: 260,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px 24px'
    }
  }, brand, subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'var(--font-body)',
      fontSize: '.7rem',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--ib-gray)'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, steps.map((s, i) => {
    const active = i === activeIndex,
      done = i < activeIndex;
    return /*#__PURE__*/React.createElement("button", {
      key: s.label,
      type: "button",
      onClick: () => onSelect && onSelect(i),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        textAlign: 'left',
        cursor: 'pointer',
        padding: '11px 24px',
        border: 'none',
        borderLeft: '2px solid ' + (active ? 'var(--ib-gold)' : 'transparent'),
        background: active ? 'var(--ib-rail-active)' : 'transparent',
        fontFamily: 'var(--font-body)',
        fontSize: '.82rem',
        color: active ? 'var(--ib-gold)' : 'var(--ib-gray)',
        transition: 'all var(--dur-fast)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '.62rem',
        border: '1px solid ' + (active || done ? 'var(--ib-gold-line)' : 'rgba(255,255,255,.18)'),
        color: active ? 'var(--ib-ink)' : done ? 'var(--ib-gold)' : 'var(--ib-gray)',
        background: active ? 'var(--ib-gold)' : 'transparent'
      }
    }, s.n ?? i), s.label);
  })), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: '20px 24px 0',
      borderTop: '1px solid var(--border-hairline-inverse)',
      fontSize: '.72rem',
      color: 'var(--ib-gray)'
    }
  }, footer));
}
Object.assign(__ds_scope, { StepRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/StepRail.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active = 0,
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      ...style
    }
  }, tabs.map((t, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      type: "button",
      onClick: () => onSelect && onSelect(i),
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '.78rem',
        letterSpacing: '.02em',
        cursor: 'pointer',
        padding: '9px 16px',
        borderRadius: 'var(--radius-app)',
        border: '1px solid ' + (on ? 'var(--ib-ink)' : 'var(--border-strong)'),
        background: on ? 'var(--ib-ink)' : 'transparent',
        color: on ? 'var(--ib-white)' : 'var(--text-muted)',
        transition: 'all var(--dur-fast)'
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteChrome.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  Icon
} = window.IBUILDDesignSystem_d69a62;
const ibNavCss = {
  position: 'sticky',
  top: 0,
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
  gap: 36,
  padding: '16px 48px',
  background: 'rgba(26,26,26,.92)',
  backdropFilter: 'blur(20px)'
};
function SiteNav({
  onNav,
  active
}) {
  const links = ['Home', 'Sobre', 'Projetos', 'Jornada', 'Produto', 'Conteúdos', 'Contato'];
  return /*#__PURE__*/React.createElement("nav", {
    style: ibNavCss
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-horizontal-novo.png",
    alt: "iBUILD",
    style: {
      height: 22,
      marginRight: 'auto'
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: 36,
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: '#' + l,
    onClick: e => {
      e.preventDefault();
      onNav(l);
    },
    style: {
      fontSize: '.75rem',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: active === l ? '#fff' : 'rgba(255,255,255,.6)',
      borderBottom: '1px solid ' + (active === l ? 'var(--accent)' : 'transparent'),
      paddingBottom: 4
    }
  }, l)))), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    size: "sm",
    onClick: () => onNav('Contato')
  }, "Fale conosco"));
}
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      minHeight: 560,
      background: 'var(--ib-ink)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 300,
      minWidth: 300,
      background: 'var(--ib-warm-white)',
      display: 'flex',
      flexDirection: 'column',
      padding: '40px 32px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-circle.png",
    alt: "iBUILD",
    style: {
      width: 136,
      margin: '0 auto 40px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.88rem',
      lineHeight: 1.6,
      color: 'var(--ib-charcoal)',
      margin: 0
    }
  }, "Imagina acompanhar a obra da sua casa direto do celular, at\xE9 no meio de um churrasco com os amigos."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.88rem',
      lineHeight: 1.6,
      color: 'var(--ib-charcoal)',
      fontWeight: 500,
      marginTop: 18
    }
  }, "Com a iBUILD, voc\xEA tem acesso di\xE1rio ao andamento da obra e \xE0 execu\xE7\xE3o de cada etapa, com total controle e transpar\xEAncia."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.61rem',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: 'var(--ib-gray)'
    }
  }, "Arraste para baixo"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 40,
      background: 'linear-gradient(to top,var(--accent),transparent)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-hero)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'right',
      padding: '0 60px 80px',
      marginLeft: 'auto',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.9rem',
      fontWeight: 500,
      letterSpacing: '7px',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      margin: '0 0 28px'
    }
  }, "Constru\xE7\xF5es Inteligentes \xB7 Chave na M\xE3o"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-hero)',
      fontWeight: 500,
      lineHeight: 1.1,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: '#fff',
      margin: '0 0 24px'
    }
  }, "Enquanto a sua vida segue, ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      fontWeight: 100,
      color: 'var(--ib-gold-screen)',
      textTransform: 'none',
      fontSize: '1.05em',
      letterSpacing: '1px'
    }
  }, "n\xF3s constru\xEDmos.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.25rem',
      color: 'rgba(255,255,255,.65)',
      lineHeight: 1.8,
      maxWidth: 700,
      margin: '0 0 40px auto'
    }
  }, "Voc\xEA n\xE3o precisa parar sua vida para construir a casa dos seus sonhos. A iBUILD cuida de tudo, da funda\xE7\xE3o ao acabamento."), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    size: "lg",
    withArrow: true,
    onClick: onCta
  }, "Como fazemos"))));
}
function Guardioes() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--ib-ink)',
      padding: '120px var(--side-padding)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--noise)',
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--content-width)',
      margin: '0 auto',
      display: 'flex',
      gap: 48,
      alignItems: 'flex-end',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true,
    style: {
      color: 'var(--ib-gold-screen)',
      marginBottom: 32
    }
  }, "Sobre a iBUILD"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-display)',
      fontWeight: 500,
      lineHeight: 1.15,
      color: 'var(--ib-off-white-screen)',
      margin: 0
    }
  }, "Os guardi\xF5es da sua tranquilidade.")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 320,
      fontSize: '1.05rem',
      lineHeight: 1.85,
      color: 'var(--ib-gray)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Sabemos o que passa na cabe\xE7a de quem decide construir. N\xE3o \xE9 s\xF3 o or\xE7amento ou o prazo. \xC9 o medo de que a obra invada sua rotina, seus relacionamentos, seu sono."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24
    }
  }, "A iBUILD existe para ser o guardi\xE3o da sua tranquilidade. Da capta\xE7\xE3o do recurso ao dia a dia na sua casa pronta, cuidamos de tudo para que sua vida siga normal."), /*#__PURE__*/React.createElement(Button, {
    variant: "outlineLight",
    withArrow: true,
    style: {
      marginTop: 36
    }
  }, "Como fazemos"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--content-width)',
      margin: '64px auto 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 6',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 24,
      left: 24,
      fontSize: '.7rem',
      fontWeight: 500,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: '#fff',
      background: 'var(--glass)',
      backdropFilter: 'var(--glass-blur)',
      padding: '10px 20px'
    }
  }, "Enquanto a vida segue"))));
}
Object.assign(window, {
  SiteNav,
  Hero,
  Guardioes
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteSections.jsx
try { (() => {
const {
  Button,
  SectionHeading,
  StatBig,
  PillarCard,
  BlogCard,
  Marquee,
  QuoteBlock,
  JourneyStep,
  Icon
} = window.IBUILDDesignSystem_d69a62;
const ibShots = [['Residência Contemporânea', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80', true], ['Design Linear', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', false], ['Ambientes Integrados', 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80', false], ['Refúgio Natural', 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80', true]];
function Showcase() {
  const [hover, setHover] = React.useState(-1);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px var(--side-padding) 120px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    label: "Nossos Projetos",
    title: "A casa que constr\xF3i hist\xF3rias",
    description: "Cada projeto iBUILD nasce de um sonho e se transforma em realidade atrav\xE9s de tecnologia, precis\xE3o e cuidado. Conhe\xE7a algumas das mais de 400 obras que j\xE1 entregamos em todo o Brasil."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gridAutoRows: '320px',
      gap: 32,
      marginTop: 60
    }
  }, ibShots.map(([name, src, large], i) => /*#__PURE__*/React.createElement("a", {
    key: name,
    href: "#projeto",
    onClick: e => e.preventDefault(),
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(-1),
    style: {
      position: 'relative',
      overflow: 'hidden',
      gridColumn: large ? 'span 2' : 'span 1',
      boxShadow: 'var(--shadow-card)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover === i ? 'scale(var(--media-zoom-strong))' : 'none',
      transition: 'transform var(--dur-media) var(--ease-out-expo)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.6rem',
      color: '#fff',
      marginBottom: 8
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.75rem',
      fontWeight: 500,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      opacity: hover === i ? 1 : 0,
      transition: 'opacity var(--dur-base)'
    }
  }, "Ver projeto ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 14
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 60,
      maxWidth: 'var(--content-width)',
      margin: '80px auto 0',
      padding: '60px 0',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(StatBig, {
    value: "400",
    label: "Obras realizadas"
  }), /*#__PURE__*/React.createElement(StatBig, {
    value: "70",
    label: "Cidades atendidas"
  }), /*#__PURE__*/React.createElement(StatBig, {
    value: "200",
    label: "Milh\xF5es em neg\xF3cios"
  }), /*#__PURE__*/React.createElement(StatBig, {
    value: "11",
    label: "Anos de experi\xEAncia"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    withArrow: true
  }, "Fa\xE7a um or\xE7amento")));
}
const ibJourney = [['01', 'Encontro de Alinhamento', 'Nosso primeiro contato: entendemos o seu sonho, suas necessidades e como a obra se encaixa na sua vida.'], ['02', 'Reunião de Projeto', 'Arquitetura, estrutura e instalações compatibilizadas antes de qualquer parede subir.'], ['03', 'Reunião de Cronograma', 'Prazo contratual, etapas e datas de decisão apresentados de uma vez.'], ['04', 'Início da Obra', 'Canteiro montado no padrão iBUILD, com gestão à vista e diário de obra desde o primeiro dia.'], ['05', 'Definição de Acabamentos', 'Escolhas dentro do orçamento fechado, sem surpresa de aditivo.'], ['06', 'Checklist de Entrega', 'Auditoria da franqueadora item por item antes de você receber a chave.'], ['07', 'Manual do Proprietário', 'Como cuidar da casa, garantias e contatos, em um documento só.'], ['08', 'Entrega do Imóvel', 'Chave na mão, com evidência de cada etapa registrada.'], ['09', 'Open House', 'Sua casa pronta, sua vida seguindo.']];
function Journey() {
  const [i, setI] = React.useState(0);
  const [n, name, desc] = ibJourney[i];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--ib-ink)',
      padding: '120px var(--side-padding) 140px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--noise)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--content-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    label: "Passo a passo",
    title: "Simule a jornada de constru\xE7\xE3o da sua casa",
    description: "Cada etapa \xE9 planejada e acompanhada pela nossa equipe. Clique em cada fase para entender o que acontece."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '340px 1fr',
      marginTop: 60,
      minHeight: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid var(--border-hairline-inverse)',
      maxHeight: 460,
      overflowY: 'auto'
    }
  }, ibJourney.map(([sn, sname], k) => /*#__PURE__*/React.createElement(JourneyStep, {
    key: sn,
    n: sn,
    name: sname,
    state: k === i ? 'active' : k < i ? 'done' : 'todo',
    onClick: () => setI(k)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '48px 60px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 2,
      background: 'rgba(255,255,255,.06)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: '100%',
      width: (i + 1) / ibJourney.length * 100 + '%',
      background: 'var(--accent)',
      transition: 'width var(--dur-slow) var(--ease-out-expo)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      border: '1px solid rgba(200,169,110,.15)',
      background: 'var(--accent-quiet)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 24,
    color: "var(--accent)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.6rem',
      fontWeight: 500,
      letterSpacing: '4px',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 12
    }
  }, "Etapa ", n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.8rem',
      fontWeight: 500,
      color: 'var(--ib-off-white-screen)',
      margin: '0 0 20px'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.95rem',
      lineHeight: 1.85,
      color: 'var(--ib-gray)',
      maxWidth: 480,
      margin: 0
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    size: "sm",
    onClick: () => setI(Math.max(0, i - 1))
  }, "\u2190 Anterior"), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "sm",
    onClick: () => setI(Math.min(ibJourney.length - 1, i + 1))
  }, "Pr\xF3xima \u2192"))))));
}
function Pillars() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)',
      padding: '100px var(--side-padding) 140px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    label: "Diferenciais",
    title: "O que sustenta a promessa"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 48,
      maxWidth: 'var(--content-width)',
      margin: '60px auto 0'
    }
  }, /*#__PURE__*/React.createElement(PillarCard, {
    icon: "lock",
    name: "Pre\xE7o fechado",
    description: "Valor e prazo definidos em contrato antes da primeira parede subir."
  }), /*#__PURE__*/React.createElement(PillarCard, {
    icon: "check",
    name: "Auditoria da rede",
    description: "A franqueadora audita a obra do franqueado etapa por etapa, com checklist e evid\xEAncia."
  }), /*#__PURE__*/React.createElement(PillarCard, {
    icon: "shield",
    name: "Seguro de obra",
    description: "Cobertura contratual durante toda a execu\xE7\xE3o, n\xE3o uma promessa verbal."
  }), /*#__PURE__*/React.createElement(PillarCard, {
    icon: "calendar",
    name: "Di\xE1rio de obra",
    description: "Registro di\xE1rio com fotos e evid\xEAncias, acess\xEDvel pelo aplicativo."
  }), /*#__PURE__*/React.createElement(PillarCard, {
    icon: "users",
    name: "Franqueados treinados",
    description: "Equipe pr\xF3pria treinada e auditada, n\xE3o terceiro sem controle."
  }), /*#__PURE__*/React.createElement(PillarCard, {
    icon: "refresh",
    name: "Processo industrializado",
    description: "Steel Frame produzido com precis\xE3o milim\xE9trica, sem improviso no canteiro."
  })));
}
function Blog() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px var(--side-padding)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    label: "Conte\xFAdos",
    title: "Tire suas d\xFAvidas antes de dar o pr\xF3ximo passo"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 32,
      maxWidth: 'var(--content-width)',
      margin: '60px auto 0'
    }
  }, /*#__PURE__*/React.createElement(BlogCard, {
    tag: "Tecnologia",
    title: "O que \xE9 Steel Frame e por que ele constr\xF3i mais r\xE1pido?",
    excerpt: "Entenda o sistema construtivo que est\xE1 revolucionando a constru\xE7\xE3o civil no Brasil e no mundo.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80"
  }), /*#__PURE__*/React.createElement(BlogCard, {
    tag: "Planejamento",
    title: "Como saber o custo real de construir a sua casa?",
    excerpt: "Descubra por que a maioria dos or\xE7amentos estoura e como a iBUILD garante pre\xE7o fechado.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
  }), /*#__PURE__*/React.createElement(BlogCard, {
    tag: "Depoimentos",
    title: "Constru\xED sem parar minha rotina \u2014 relato de um cliente iBUILD",
    excerpt: "A experi\xEAncia real de quem construiu com a iBUILD e como a vida seguiu normalmente durante a obra.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
  })));
}
function CtaBlock() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '160px var(--side-padding)',
      textAlign: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-flat)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 700,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.7rem',
      fontWeight: 500,
      letterSpacing: '4px',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      margin: '0 0 28px'
    }
  }, "Vamos conversar"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-h1)',
      fontWeight: 500,
      color: 'var(--ib-off-white-screen)',
      lineHeight: 1.3,
      margin: '0 0 20px'
    }
  }, "Pronto para construir sem preocupa\xE7\xF5es?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      color: 'var(--ib-gray-light)',
      lineHeight: 1.7,
      margin: '0 0 48px'
    }
  }, "Fale com a iBUILD e descubra como \xE9 construir com tranquilidade. Sua vida n\xE3o precisa parar, a gente cuida de tudo."), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    size: "lg"
  }, "Fale com a nossa equipe")));
}
function SiteFooter() {
  const cols = [['Empresa', ['Sobre', 'Projetos', 'Jornada', 'Conteúdos']], ['Construir', ['Steel Frame', 'Orçamento', 'Financiamento', 'Padrões de acabamento']], ['Contato', ['WhatsApp', 'E-mail', 'Instagram', 'Seja franqueado']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#111',
      padding: '80px var(--side-padding) 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-width)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 48,
      paddingBottom: 48,
      borderBottom: '1px solid var(--border-hairline-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-horizontal-novo.png",
    alt: "iBUILD",
    style: {
      height: 28,
      opacity: .6,
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.85rem',
      color: 'var(--ib-gray)',
      lineHeight: 1.7,
      maxWidth: 280,
      margin: 0
    }
  }, "Rede nacional de franquias de constru\xE7\xE3o industrializada em Steel Frame, no modelo chave na m\xE3o.")), cols.map(([t, items]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '.7rem',
      fontWeight: 400,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      margin: '0 0 20px'
    }
  }, t), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, items.map(l => /*#__PURE__*/React.createElement("li", {
    key: l,
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: '.85rem',
      color: 'var(--ib-gray)',
      textDecoration: 'none'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-width)',
      margin: '0 auto',
      paddingTop: 28,
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '.75rem',
      color: 'var(--ib-charcoal)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 iBUILD Construtora"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '1.2rem',
      color: 'var(--ib-gray)'
    }
  }, "deixa com a gente, n\xF3s constru\xEDmos!")));
}
Object.assign(window, {
  Showcase,
  Journey,
  Pillars,
  Blog,
  CtaBlock,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soe/SoePanels.jsx
try { (() => {
const {
  Eyebrow,
  Button,
  Card,
  Badge,
  Chip,
  Field,
  Select,
  RadioGroup,
  ToggleRow,
  Tabs,
  MetricStat,
  ProgressRow,
  CostTable
} = window.IBUILDDesignSystem_d69a62;
const ibPanel = {
  padding: '44px 40px 80px',
  maxWidth: 980
};
const ibH2 = {
  fontFamily: 'var(--font-display)',
  fontSize: '1.9rem',
  fontWeight: 500,
  margin: '6px 0 0',
  color: 'var(--text-strong)'
};
const ibHead = ({
  label,
  title
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 32
  }
}, /*#__PURE__*/React.createElement(Eyebrow, {
  tone: "muted"
}, label), /*#__PURE__*/React.createElement("h2", {
  style: ibH2
}, title));
function PanelInicio() {
  return /*#__PURE__*/React.createElement("div", {
    style: ibPanel
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--ib-rail)',
      color: 'var(--ib-off-white)',
      padding: '44px 40px',
      overflow: 'hidden',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--noise)',
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--ib-gold)'
    }
  }, "Simulador de Or\xE7amento Express"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2.2rem',
      fontWeight: 500,
      lineHeight: 1.15,
      margin: '14px 0 0'
    }
  }, "Enquanto a sua vida segue,", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '2.6rem',
      color: 'var(--ib-gold)'
    }
  }, "n\xF3s constru\xEDmos.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "20px 22px"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Franquia"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: '1rem'
    }
  }, "iBUILD Campo Grande \xB7 MS")), /*#__PURE__*/React.createElement(Card, {
    padding: "20px 22px"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Franqueado respons\xE1vel"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: '1rem'
    }
  }, "Vin\xEDcius Tavares")), /*#__PURE__*/React.createElement(Card, {
    padding: "20px 22px"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Respons\xE1vel pela simula\xE7\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: '1rem'
    }
  }, "Marina Rezende"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "20px 22px",
    accent: "left"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Simula\xE7\xF5es este m\xEAs"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: '1.6rem'
    }
  }, "18")), /*#__PURE__*/React.createElement(Card, {
    padding: "20px 22px",
    accent: "left"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Tempo m\xE9dio de proposta"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: '1.6rem'
    }
  }, "1 h 12 min"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    withArrow: true
  }, "Iniciar levantamento")));
}
const ibSub = ['Dados Cliente', 'Recursos Financeiros', 'Resumo dos Recursos'];
function PanelLevantamento() {
  const [sub, setSub] = React.useState(0);
  const [rec, setRec] = React.useState('Financiado');
  return /*#__PURE__*/React.createElement("div", {
    style: ibPanel
  }, ibHead({
    label: 'Passo 1',
    title: 'Levantamento Inicial'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      border: '1px solid var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      background: 'var(--ib-rail)',
      padding: '28px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.6rem',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--ib-gold)',
      marginBottom: 20
    }
  }, "Levantamento"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, ibSub.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSub(i),
    style: {
      background: 'none',
      border: 'none',
      textAlign: 'left',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--font-display)',
      fontSize: '.86rem',
      color: i === sub ? 'var(--ib-gold)' : 'var(--ib-gray)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      flex: 'none',
      background: i <= sub ? 'var(--ib-gold)' : 'transparent',
      border: '1px solid ' + (i <= sub ? 'var(--ib-gold)' : 'rgba(255,255,255,.2)')
    }
  }), s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--surface-card)',
      padding: '40px 46px 34px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, sub === 0 ? 'Informações' : sub === 1 ? 'Recursos' : 'Resumo'), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...ibH2,
      fontSize: '1.5rem',
      marginBottom: 26
    }
  }, sub === 0 ? 'Pessoais' : sub === 1 ? 'Financeiros' : 'dos Recursos para Construção'), sub === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '18px 22px',
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nome completo",
    value: "Marina Rezende Duarte"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "CPF",
    value: "048.221.339-71"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "E-mail",
    value: "marina.duarte@email.com"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Telefone",
    value: "+55 67 9 8112-4470"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Cidade da obra",
    value: "Campo Grande"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "UF",
    value: "MS",
    options: ['MS', 'SP', 'PR', 'SC']
  })), sub === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '18px 22px',
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(RadioGroup, {
    name: "rec",
    label: "Origem do recurso",
    options: ['Próprio', 'Financiado'],
    value: rec,
    onChange: setRec,
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Renda familiar bruta",
    value: "R$ 32.000"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Recurso pr\xF3prio dispon\xEDvel",
    value: "R$ 420.000"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Parcela m\xE1xima (30% da renda)",
    value: "R$ 9.600",
    disabled: true,
    hint: "Calculado automaticamente."
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Valor total financi\xE1vel",
    value: "R$ 1.140.000",
    disabled: true,
    hint: "Estimativa Caixa, 360 meses."
  })), sub === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      maxWidth: 700
    }
  }, /*#__PURE__*/React.createElement(Card, {
    accent: "left",
    padding: "20px 24px"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Cliente"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-doc)',
      fontSize: '.92rem',
      lineHeight: 1.7
    }
  }, "Marina Rezende Duarte", /*#__PURE__*/React.createElement("br", null), "048.221.339-71")), /*#__PURE__*/React.createElement(Card, {
    accent: "left",
    padding: "20px 24px"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Endere\xE7o da obra"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-doc)',
      fontSize: '.92rem',
      lineHeight: 1.7
    }
  }, "Rua Ant\xF4nio Maria Coelho, 1840", /*#__PURE__*/React.createElement("br", null), "Campo Grande \xB7 MS")), /*#__PURE__*/React.createElement(Card, {
    accent: "left",
    padding: "20px 24px"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Recursos financeiros"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-doc)',
      fontSize: '.92rem',
      lineHeight: 1.7
    }
  }, "Pr\xF3prio: R$ 420.000", /*#__PURE__*/React.createElement("br", null), "Financi\xE1vel: R$ 1.140.000")), /*#__PURE__*/React.createElement(Card, {
    accent: "left",
    padding: "20px 24px"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Capacidade total"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: '1.4rem'
    }
  }, "R$ 1.560.000"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 30,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    size: "sm",
    onClick: () => setSub(Math.max(0, sub - 1))
  }, "\u2190 Anterior"), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "sm",
    onClick: () => setSub(Math.min(2, sub + 1))
  }, "Avan\xE7ar \u2192")))));
}
const ibChoices = {
  'Pavimentos': ['1 pavimento', '2 pavimentos', '2 + mezanino', 'Sob consulta'],
  'Tipo de Telha': ['Termoacústica', 'Cerâmica', 'Metálica', 'Fibrocimento'],
  'Paredes Externas': ['Cimentícia STANDARD', 'Cimentícia PREMIUM', 'Siding', 'Telha metálica']
};
function PanelEscolhas() {
  const keys = Object.keys(ibChoices);
  const [t, setT] = React.useState(0);
  const [pick, setPick] = React.useState({});
  const key = keys[t];
  return /*#__PURE__*/React.createElement("div", {
    style: ibPanel
  }, ibHead({
    label: 'Passo 2',
    title: 'Escolhas do Projeto'
  }), /*#__PURE__*/React.createElement(Tabs, {
    tabs: keys,
    active: t,
    onSelect: setT,
    style: {
      marginBottom: 26
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14
    }
  }, ibChoices[key].map(o => {
    const on = (pick[key] || ibChoices[key][0]) === o;
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      onClick: () => setPick({
        ...pick,
        [key]: o
      }),
      style: {
        textAlign: 'left',
        cursor: 'pointer',
        padding: '20px 18px',
        minHeight: 120,
        background: on ? 'var(--ib-ink)' : 'var(--surface-card)',
        color: on ? '#fff' : 'var(--text-strong)',
        border: '1px solid ' + (on ? 'var(--ib-ink)' : 'var(--border-strong)'),
        borderRadius: 'var(--radius-app)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all var(--dur-fast)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '.95rem',
        lineHeight: 1.3
      }
    }, o), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.68rem',
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: on ? 'var(--ib-gold)' : 'var(--text-muted)'
      }
    }, on ? 'Selecionado' : 'Selecionar'));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(ToggleRow, {
    label: "Seguro de obra",
    description: "Cobertura contratual durante toda a execu\xE7\xE3o.",
    checked: true
  }), /*#__PURE__*/React.createElement(ToggleRow, {
    label: "Acompanhamento por aplicativo",
    description: "Di\xE1rio de obra com evid\xEAncia fotogr\xE1fica.",
    checked: true
  }), /*#__PURE__*/React.createElement(ToggleRow, {
    label: "Projeto de interiores",
    description: "Contratado \xE0 parte, fora do pre\xE7o fechado."
  })));
}
function PanelResumo() {
  return /*#__PURE__*/React.createElement("div", {
    style: ibPanel
  }, ibHead({
    label: 'Passo 5',
    title: 'Resumo'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ib-rail)',
      color: 'var(--ib-off-white)',
      padding: '32px 34px',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--ib-gold)'
    }
  }, "Custo total estimado"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2.6rem',
      fontWeight: 500,
      margin: '10px 0 18px',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "R$ 1.204.000"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: '#3a3730',
      overflow: 'hidden',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '35%',
      background: 'var(--ib-gold)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '41%',
      background: 'var(--ib-gold-line)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '24%',
      background: 'var(--ib-gold-deep)'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.74rem',
      color: 'var(--ib-gray)',
      marginTop: 10
    }
  }, "35% estrutura e funda\xE7\xE3o \xB7 41% fechamentos e instala\xE7\xF5es \xB7 24% acabamentos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      borderBottom: '1px solid var(--border-strong)',
      paddingBottom: 18,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(MetricStat, {
    label: "\xC1rea constru\xEDda",
    value: "184 m\xB2"
  }), /*#__PURE__*/React.createElement(MetricStat, {
    label: "Custo por m\xB2",
    value: "R$ 6.543"
  }), /*#__PURE__*/React.createElement(MetricStat, {
    label: "Prazo contratual",
    value: "7 meses"
  }), /*#__PURE__*/React.createElement(MetricStat, {
    label: "Folga sobre capacidade",
    value: "R$ 356.000",
    tone: "good"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    accent: "left",
    padding: "22px 26px"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Padr\xE3o construtivo"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: '1.1rem'
    }
  }, "PREMIUM"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    active: true
  }, "Steel Frame"), /*#__PURE__*/React.createElement(Chip, {
    active: true
  }, "Radier"), /*#__PURE__*/React.createElement(Chip, {
    active: true
  }, "Telha termoac\xFAstica"))), /*#__PURE__*/React.createElement(Card, {
    accent: "left",
    padding: "22px 26px"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Garantias inclu\xEDdas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "good"
  }, "Pre\xE7o fechado"), /*#__PURE__*/React.createElement(Badge, {
    tone: "good"
  }, "Seguro de obra"), /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, "Auditoria da rede")))));
}
function PanelProposta() {
  return /*#__PURE__*/React.createElement("div", {
    style: ibPanel
  }, ibHead({
    label: 'Passo 6',
    title: 'Proposta Comercial'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ib-ink)',
      color: '#fff',
      padding: '34px 36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--ib-gold)'
    }
  }, "SOE 2.0"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      fontWeight: 500,
      margin: '10px 0 0'
    }
  }, "Proposta N\xBA 25874"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.82rem',
      color: 'var(--ib-gray)',
      margin: '8px 0 0'
    }
  }, "Marina Rezende Duarte \xB7 Campo Grande \xB7 MS \xB7 v\xE1lida por 15 dias")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/seal-light.png",
    alt: "",
    style: {
      height: 84,
      opacity: .85
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-strong)',
      borderTop: 'none',
      padding: '36px 44px 44px'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1rem',
      fontWeight: 500,
      margin: '0 0 18px'
    }
  }, "Valores por etapa construtiva"), /*#__PURE__*/React.createElement(CostTable, {
    columns: ['Etapa', '%', 'Valor'],
    rows: [['Projetos e compatibilização', '5%', 'R$ 60.200'], ['Canteiro e fundação radier', '12%', 'R$ 144.480'], ['Estrutura Light Steel Frame', '24%', 'R$ 288.960'], ['Cobertura e impermeabilização', '9%', 'R$ 108.360'], ['Fechamentos e isolamento', '19%', 'R$ 228.760'], ['Instalações elétrica e hidráulica', '15%', 'R$ 180.600'], ['Acabamentos', '16%', 'R$ 192.640']],
    total: ['Total', '100%', 'R$ 1.204.000']
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1rem',
      fontWeight: 500,
      margin: '32px 0 10px'
    }
  }, "Cronograma f\xEDsico previsto"), /*#__PURE__*/React.createElement(ProgressRow, {
    stage: "Projetos",
    percent: 100,
    note: "m\xEAs 1"
  }), /*#__PURE__*/React.createElement(ProgressRow, {
    stage: "Funda\xE7\xE3o radier",
    percent: 100,
    note: "m\xEAs 2"
  }), /*#__PURE__*/React.createElement(ProgressRow, {
    stage: "Estrutura LSF",
    percent: 62,
    note: "m\xEAs 3"
  }), /*#__PURE__*/React.createElement(ProgressRow, {
    stage: "Fechamentos",
    percent: 20,
    note: "m\xEAs 4-5"
  }), /*#__PURE__*/React.createElement(ProgressRow, {
    stage: "Acabamentos",
    percent: 0,
    note: "m\xEAs 6-7"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 40,
      fontSize: '.78rem',
      color: 'var(--text-muted)',
      maxWidth: '68ch',
      lineHeight: 1.7
    }
  }, "Valores com pre\xE7o fechado e prazo contratual. Instala\xE7\xF5es el\xE9tricas e hidr\xE1ulicas podem ser reajustadas ap\xF3s o fornecimento dos projetos, conforme cl\xE1usula da proposta."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    withArrow: true
  }, "Gerar PDF da proposta"), /*#__PURE__*/React.createElement(Button, {
    variant: "outlineDark"
  }, "Enviar ao cliente"))));
}
Object.assign(window, {
  PanelInicio,
  PanelLevantamento,
  PanelEscolhas,
  PanelResumo,
  PanelProposta
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soe/SoePanels.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.CostTable = __ds_scope.CostTable;

__ds_ns.MetricStat = __ds_scope.MetricStat;

__ds_ns.ProgressRow = __ds_scope.ProgressRow;

__ds_ns.StatBig = __ds_scope.StatBig;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.ToggleRow = __ds_scope.ToggleRow;

__ds_ns.BlogCard = __ds_scope.BlogCard;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.PillarCard = __ds_scope.PillarCard;

__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;

__ds_ns.JourneyStep = __ds_scope.JourneyStep;

__ds_ns.StepRail = __ds_scope.StepRail;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
