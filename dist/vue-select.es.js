var T = Object.defineProperty, I = Object.defineProperties;
var M = Object.getOwnPropertyDescriptors;
var B = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, K = Object.prototype.propertyIsEnumerable;
var L = (e, t, s) => t in e ? T(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, p = (e, t) => {
  for (var s in t || (t = {}))
    E.call(t, s) && L(e, s, t[s]);
  if (B)
    for (var s of B(t))
      K.call(t, s) && L(e, s, t[s]);
  return e;
}, O = (e, t) => I(e, M(t));
import { openBlock as a, createElementBlock as d, createElementVNode as c, resolveDirective as N, normalizeClass as D, renderSlot as r, normalizeProps as h, guardReactiveProps as u, Fragment as x, renderList as A, mergeProps as g, createTextVNode as _, toDisplayString as b, createBlock as w, resolveDynamicComponent as S, createCommentVNode as v, toHandlers as j, withDirectives as V, vShow as k, createVNode as R, Transition as z, withCtx as q, withModifiers as F } from "vue";
const $ = {
  spinner: {
    text: "Loading..."
  },
  noOptions: {
    text: "Sorry, no matching options."
  },
  search: {
    ariaLabel: "Search for options"
  },
  deselectButton: {
    ariaLabel: (e) => `Deselect ${e}`,
    title: (e) => `Deselect ${e}`
  },
  clearButton: {
    ariaLabel: "Clear Selection",
    title: "Clear Selection"
  }
}, U = {
  props: {
    autoscroll: {
      type: Boolean,
      default: !0
    }
  },
  watch: {
    typeAheadPointer() {
      this.autoscroll && this.maybeAdjustScroll();
    },
    open(e) {
      this.autoscroll && e && this.$nextTick(() => this.maybeAdjustScroll());
    }
  },
  methods: {
    maybeAdjustScroll() {
      var t;
      const e = ((t = this.$refs.dropdownMenu) == null ? void 0 : t.children[this.typeAheadPointer]) || !1;
      if (e) {
        const s = this.getDropdownViewport(), { top: l, bottom: n, height: i } = e.getBoundingClientRect();
        if (l < s.top)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop;
        if (n > s.bottom)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop - (s.height - i);
      }
    },
    getDropdownViewport() {
      return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.getBoundingClientRect() : {
        height: 0,
        top: 0,
        bottom: 0
      };
    }
  }
}, J = {
  data() {
    return {
      typeAheadPointer: -1
    };
  },
  watch: {
    filteredOptions() {
      for (let e = 0; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    open(e) {
      e && this.typeAheadToLastSelected();
    },
    selectedValue() {
      this.open && this.typeAheadToLastSelected();
    }
  },
  methods: {
    typeAheadUp() {
      for (let e = this.typeAheadPointer - 1; e >= 0; e--)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadDown() {
      this.open || (this.open = !0);
      for (let e = this.typeAheadPointer + 1; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadSelect() {
      const e = this.filteredOptions[this.typeAheadPointer];
      e && this.selectable(e) && this.select(e);
    },
    typeAheadToLastSelected() {
      const e = this.selectedValue.length !== 0 ? this.filteredOptions.indexOf(
        this.selectedValue[this.selectedValue.length - 1]
      ) : -1;
      e !== -1 && (this.typeAheadPointer = e);
    }
  }
}, H = {
  props: {
    loading: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      mutableLoading: !1
    };
  },
  watch: {
    search() {
      this.$emit("search", this.search, this.toggleLoading);
    },
    loading(e) {
      this.mutableLoading = e;
    }
  },
  methods: {
    toggleLoading(e = null) {
      return e == null ? this.mutableLoading = !this.mutableLoading : this.mutableLoading = e;
    }
  }
}, C = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [l, n] of t)
    s[l] = n;
  return s;
}, X = {}, Y = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, Q = /* @__PURE__ */ c("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), G = [
  Q
];
function W(e, t) {
  return a(), d("svg", Y, G);
}
const Z = /* @__PURE__ */ C(X, [["render", W]]), ee = {}, te = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, se = /* @__PURE__ */ c("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), ie = [
  se
];
function oe(e, t) {
  return a(), d("svg", te, ie);
}
const le = /* @__PURE__ */ C(ee, [["render", oe]]), P = {
  Deselect: Z,
  OpenIndicator: le
}, ne = {
  mounted(e, { instance: t }) {
    if (t.appendToBody) {
      const {
        height: s,
        top: l,
        left: n,
        width: i
      } = t.$refs.toggle.getBoundingClientRect();
      let m = window.scrollX || window.pageXOffset, o = window.scrollY || window.pageYOffset;
      e.unbindPosition = t.calculatePosition(e, t, {
        width: i + "px",
        left: m + n + "px",
        top: o + l + s + "px"
      }), document.body.appendChild(e);
    }
  },
  unmounted(e, { instance: t }) {
    t.appendToBody && (e.unbindPosition && typeof e.unbindPosition == "function" && e.unbindPosition(), e.parentNode && e.parentNode.removeChild(e));
  }
};
function ae(e) {
  const t = {};
  return Object.keys(e).sort().forEach((s) => {
    t[s] = e[s];
  }), JSON.stringify(t);
}
let re = 0;
function de() {
  return ++re;
}
const he = {
  components: p({}, P),
  directives: { appendToBody: ne },
  mixins: [U, J, H],
  compatConfig: {
    MODE: 3
  },
  emits: [
    "open",
    "close",
    "update:modelValue",
    "search",
    "search:compositionstart",
    "search:compositionend",
    "search:keydown",
    "search:blur",
    "search:focus",
    "search:input",
    "option:created",
    "option:selecting",
    "option:selected",
    "option:deselecting",
    "option:deselected"
  ],
  props: {
    modelValue: {},
    components: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    locale: {
      type: Function,
      default: (e) => e
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    deselectFromDropdown: {
      type: Boolean,
      default: !1
    },
    searchable: {
      type: Boolean,
      default: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    transition: {
      type: String,
      default: "vs__fade"
    },
    clearSearchOnSelect: {
      type: Boolean,
      default: !0
    },
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    label: {
      type: String,
      default: "label"
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    reduce: {
      type: Function,
      default: (e) => e
    },
    selectable: {
      type: Function,
      default: (e) => !0
    },
    getOptionLabel: {
      type: Function,
      default(e) {
        return typeof e == "object" ? e.hasOwnProperty(this.label) ? e[this.label] : console.warn(
          `[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`
        ) : e;
      }
    },
    getOptionKey: {
      type: Function,
      default(e) {
        if (typeof e != "object")
          return e;
        try {
          return e.hasOwnProperty("id") ? e.id : ae(e);
        } catch (t) {
          return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`, e, t);
        }
      }
    },
    onTab: {
      type: Function,
      default: function() {
        this.selectOnTab && !this.isComposing && this.typeAheadSelect();
      }
    },
    taggable: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: null
    },
    pushTags: {
      type: Boolean,
      default: !1
    },
    filterable: {
      type: Boolean,
      default: !0
    },
    filterBy: {
      type: Function,
      default(e, t, s) {
        return (t || "").toLocaleLowerCase().indexOf(s.toLocaleLowerCase()) > -1;
      }
    },
    filter: {
      type: Function,
      default(e, t) {
        return e.filter((s) => {
          let l = this.getOptionLabel(s);
          return typeof l == "number" && (l = l.toString()), this.filterBy(s, l, t);
        });
      }
    },
    createOption: {
      type: Function,
      default(e) {
        return typeof this.optionList[0] == "object" ? { [this.label]: e } : e;
      }
    },
    resetOnOptionsChange: {
      default: !1,
      validator: (e) => ["function", "boolean"].includes(typeof e)
    },
    clearSearchOnBlur: {
      type: Function,
      default: function({ clearSearchOnSelect: e, multiple: t }) {
        return e && !t;
      }
    },
    noDrop: {
      type: Boolean,
      default: !1
    },
    inputId: {
      type: String
    },
    dir: {
      type: String,
      default: "auto"
    },
    selectOnTab: {
      type: Boolean,
      default: !1
    },
    selectOnKeyCodes: {
      type: Array,
      default: () => [13]
    },
    searchInputQuerySelector: {
      type: String,
      default: "[type=search]"
    },
    mapKeydown: {
      type: Function,
      default: (e, t) => e
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    calculatePosition: {
      type: Function,
      default(e, t, { width: s, top: l, left: n }) {
        e.style.top = l, e.style.left = n, e.style.width = s;
      }
    },
    dropdownShouldOpen: {
      type: Function,
      default({ noDrop: e, open: t, mutableLoading: s }) {
        return e ? !1 : t && !s;
      }
    },
    uid: {
      type: [String, Number],
      default: () => de()
    },
    listboxID: {
      type: String,
      default: function() {
        return `vs${this.uid}__listbox`;
      }
    },
    comboboxID: {
      type: String,
      default: function() {
        return `vs${this.uid}__combobox`;
      }
    },
    ariaLabelledby: {
      type: String,
      default: void 0
    },
    ariaLabel: {
      type: String,
      default: void 0
    },
    required: {
      type: Boolean,
      default: void 0
    }
  },
  data() {
    return {
      search: "",
      open: !1,
      isComposing: !1,
      pushedTags: [],
      _value: [],
      deselectButtons: []
    };
  },
  computed: {
    i18n() {
      return this.locale($);
    },
    isReducingValues() {
      return this.$props.reduce !== this.$options.props.reduce.default;
    },
    isTrackingValues() {
      return typeof this.modelValue == "undefined" || this.isReducingValues;
    },
    selectedValue() {
      let e = this.modelValue;
      return this.isTrackingValues && (e = this.$data._value), e != null && e !== "" ? [].concat(e) : [];
    },
    optionList() {
      return this.options.concat(this.pushTags ? this.pushedTags : []);
    },
    searchEl() {
      return this.$slots.search ? this.$refs.selectedOptions.querySelector(
        this.searchInputQuerySelector
      ) : this.$refs.search;
    },
    scope() {
      const e = {
        search: this.search,
        loading: this.loading,
        searching: this.searching,
        filteredOptions: this.filteredOptions
      };
      return {
        combobox: {
          attributes: p({
            disabled: this.disabled,
            placeholder: this.searchPlaceholder,
            tabindex: this.tabindex,
            readonly: !this.searchable,
            id: this.comboboxID,
            "aria-autocomplete": "list",
            "aria-labelledby": this.ariaLabelledby,
            "aria-controls": this.listboxID,
            "aria-expanded": this.dropdownOpen.toString(),
            "aria-owns": this.listboxID,
            "aria-label": this.ariaLabel,
            "aria-required": this.required,
            "aria-haspopup": "listbox",
            tabIndex: "0",
            autoComplete: "off",
            autoCorrect: "off",
            autoCapitalize: "none",
            spellCheck: "false",
            role: "textbox",
            ref: "search",
            type: "search",
            autocomplete: this.autocomplete,
            value: this.search
          }, this.dropdownOpen && this.filteredOptions[this.typeAheadPointer] ? {
            "aria-activedescendant": `vs${this.uid}__option-${this.typeAheadPointer}`
          } : {}),
          events: {
            compositionstart: () => this.isComposing = !0,
            compositionend: () => this.isComposing = !1,
            keydown: this.onSearchKeyDown,
            blur: this.onSearchBlur,
            focus: this.onSearchFocus,
            input: (t) => {
              this.search = t.target.value, this.open = !0;
            }
          }
        },
        listbox: {
          attributes: {
            id: this.listboxID,
            key: this.listboxID,
            "aria-multiselectable": this.multiple.toString()
          }
        },
        spinner: {
          loading: this.mutableLoading
        },
        noOptions: {
          search: this.search,
          loading: this.mutableLoading,
          searching: this.searching
        },
        openIndicator: {
          attributes: {
            ref: "openIndicator",
            role: "presentation",
            class: "vs__open-indicator"
          }
        },
        listHeader: e,
        listFooter: e,
        header: O(p({}, e), { deselect: this.deselect }),
        footer: O(p({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return p(p({}, P), this.components);
    },
    stateClasses() {
      return {
        "vs--open": this.dropdownOpen,
        "vs--single": !this.multiple,
        "vs--multiple": this.multiple,
        "vs--searching": this.searching && !this.noDrop,
        "vs--searchable": this.searchable && !this.noDrop,
        "vs--unsearchable": !this.searchable,
        "vs--loading": this.mutableLoading,
        "vs--disabled": this.disabled
      };
    },
    searching() {
      return !!this.search;
    },
    dropdownOpen() {
      return this.dropdownShouldOpen(this);
    },
    searchPlaceholder() {
      return this.isValueEmpty && this.placeholder ? this.placeholder : void 0;
    },
    filteredOptions() {
      const e = [].concat(this.optionList);
      if (!this.filterable && !this.taggable)
        return e;
      const t = this.search.length ? this.filter(e, this.search, this) : e;
      if (this.taggable && this.search.length) {
        const s = this.createOption(this.search);
        this.optionExists(s) || t.unshift(s);
      }
      return t;
    },
    isValueEmpty() {
      return this.selectedValue.length === 0;
    },
    showClearButton() {
      return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
    }
  },
  watch: {
    options(e, t) {
      const s = () => typeof this.resetOnOptionsChange == "function" ? this.resetOnOptionsChange(
        e,
        t,
        this.selectedValue
      ) : this.resetOnOptionsChange;
      !this.taggable && s() && this.clearSelection(), this.modelValue && this.isTrackingValues && this.setInternalValueFromOptions(this.modelValue);
    },
    modelValue: {
      immediate: !0,
      handler(e) {
        this.isTrackingValues && this.setInternalValueFromOptions(e);
      }
    },
    multiple() {
      this.clearSelection();
    },
    open(e) {
      this.$emit(e ? "open" : "close");
    },
    search(e) {
      e.length && (this.open = !0);
    }
  },
  created() {
    this.mutableLoading = this.loading;
  },
  methods: {
    setInternalValueFromOptions(e) {
      Array.isArray(e) ? this.$data._value = e.map(
        (t) => this.findOptionFromReducedValue(t)
      ) : this.$data._value = this.findOptionFromReducedValue(e);
    },
    select(e) {
      this.$emit("option:selecting", e), this.isOptionSelected(e) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(e) : (this.taggable && !this.optionExists(e) && (this.$emit("option:created", e), this.pushTag(e)), this.multiple && (e = this.selectedValue.concat(e)), this.updateValue(e), this.$emit("option:selected", e)), this.onAfterSelect(e);
    },
    deselect(e) {
      this.$emit("option:deselecting", e), this.updateValue(
        this.selectedValue.filter((t) => !this.optionComparator(t, e))
      ), this.$emit("option:deselected", e);
    },
    deselectButton(e) {
      const t = this.selectedValue.findIndex(
        (s) => this.optionComparator(s, e)
      );
      if (this.deselect(e), this.$refs.deselectButtons && this.$refs.deselectButtons.length > 1 && t >= 0) {
        let s = t === 0 ? 1 : t - 1;
        this.$refs.deselectButtons[s].focus();
      } else
        this.searchEl.focus();
    },
    clearSelection() {
      this.updateValue(this.multiple ? [] : null);
    },
    onAfterSelect(e) {
      this.closeOnSelect && (this.open = !this.open), this.clearSearchOnSelect && (this.search = ""), this.noDrop && this.multiple && this.$nextTick(() => this.$refs.search.focus());
    },
    updateValue(e) {
      typeof this.modelValue == "undefined" && (this.$data._value = e), e !== null && (Array.isArray(e) ? e = e.map((t) => this.reduce(t)) : e = this.reduce(e)), this.$emit("update:modelValue", e);
    },
    toggleDropdown(e) {
      const t = e.target !== this.searchEl;
      t && e.preventDefault();
      const s = [
        ...this.deselectButtons || [],
        this.$refs.clearButton
      ];
      if (this.searchEl === void 0 || s.filter(Boolean).some((l) => l.contains(e.target) || l === e.target)) {
        e.preventDefault();
        return;
      }
      this.open && t ? this.open = !1 : this.disabled || (this.open = !0, this.searchEl.focus());
    },
    isOptionSelected(e) {
      return this.selectedValue.some(
        (t) => this.optionComparator(t, e)
      );
    },
    isOptionDeselectable(e) {
      return this.isOptionSelected(e) && this.deselectFromDropdown;
    },
    optionComparator(e, t) {
      return this.getOptionKey(e) === this.getOptionKey(t);
    },
    findOptionFromReducedValue(e) {
      const t = (l) => JSON.stringify(this.reduce(l)) === JSON.stringify(e), s = [...this.options, ...this.pushedTags].filter(t);
      return s.length === 1 ? s[0] : s.find(
        (l) => this.optionComparator(l, this.$data._value)
      ) || e;
    },
    closeSearchOptions() {
      this.open = !1, this.$emit("search:blur");
    },
    maybeDeleteValue() {
      if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
        let e = null;
        this.multiple && (e = [
          ...this.selectedValue.slice(0, this.selectedValue.length - 1)
        ]), this.updateValue(e);
      }
    },
    optionExists(e) {
      return this.optionList.some(
        (t) => this.optionComparator(t, e)
      );
    },
    normalizeOptionForSlot(e) {
      return typeof e == "object" ? e : { [this.label]: e };
    },
    pushTag(e) {
      this.pushedTags.push(e);
    },
    onEscape() {
      this.search.length ? this.search = "" : this.closeSearchOptions();
    },
    onSearchBlur() {
      if (this.mousedown && !this.searching)
        this.mousedown = !1;
      else {
        const { clearSearchOnSelect: e, multiple: t } = this;
        this.clearSearchOnBlur({ clearSearchOnSelect: e, multiple: t }) && (this.search = ""), this.closeSearchOptions();
        return;
      }
      if (this.search.length === 0 && this.options.length === 0) {
        this.closeSearchOptions();
        return;
      }
    },
    onSearchFocus() {
      this.open = !0, this.$emit("search:focus");
    },
    onMousedown() {
      this.mousedown = !0;
    },
    onMouseUp() {
      this.mousedown = !1;
    },
    onSearchKeyDown(e) {
      const t = (n) => (n.preventDefault(), !this.isComposing && this.typeAheadSelect()), s = {
        8: (n) => this.maybeDeleteValue(),
        9: (n) => this.onTab(),
        27: (n) => this.onEscape(),
        38: (n) => {
          if (n.preventDefault(), !this.open) {
            this.open = !0;
            return;
          }
          return n.altKey ? this.closeSearchOptions() : this.typeAheadUp();
        },
        40: (n) => {
          if (n.preventDefault(), !this.open) {
            this.open = !0;
            return;
          }
          return this.typeAheadDown();
        }
      };
      this.selectOnKeyCodes.forEach(
        (n) => s[n] = t
      );
      const l = this.mapKeydown(s, this);
      if (typeof l[e.keyCode] == "function")
        return l[e.keyCode](e);
    },
    onSearchKeyPress(e) {
      !this.open && e.keyCode === 32 && (e.preventDefault(), this.open = !0);
    }
  }
}, ce = ["dir"], ue = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, pe = ["role"], fe = ["role"], ge = ["disabled", "title", "aria-label", "onClick"], ye = {
  ref: "actions",
  class: "vs__actions"
}, be = ["disabled", "title", "aria-label"], me = ["id", "aria-selected", "onMouseover", "onClick"], Oe = {
  key: 0,
  class: "vs__no-options"
}, _e = ["id"];
function we(e, t, s, l, n, i) {
  const m = N("append-to-body");
  return a(), d("div", {
    dir: s.dir,
    class: D(["v-select", i.stateClasses])
  }, [
    r(e.$slots, "header", h(u(i.scope.header))),
    c("div", {
      ref: "toggle",
      class: "vs__dropdown-toggle",
      onMousedown: t[1] || (t[1] = (o) => i.toggleDropdown(o))
    }, [
      c("div", ue, [
        c("ul", {
          class: "vs__selected-options-list",
          role: s.multiple ? void 0 : "none"
        }, [
          (a(!0), d(x, null, A(i.selectedValue, (o, f) => r(e.$slots, "selected-option-container", {
            option: i.normalizeOptionForSlot(o),
            deselect: i.deselect,
            multiple: s.multiple,
            disabled: s.disabled
          }, () => [
            (a(), d("li", {
              key: s.getOptionKey(o),
              class: "vs__selected",
              role: s.multiple ? void 0 : "none"
            }, [
              r(e.$slots, "selected-option", g({ ref_for: !0 }, i.normalizeOptionForSlot(o)), () => [
                _(b(s.getOptionLabel(o)), 1)
              ]),
              s.multiple ? (a(), d("button", {
                key: 0,
                ref_for: !0,
                ref: (y) => n.deselectButtons[f] = y,
                disabled: s.disabled,
                type: "button",
                class: "vs__deselect",
                title: i.i18n.deselectButton.title(s.getOptionLabel(o)),
                "aria-label": i.i18n.deselectButton.ariaLabel(s.getOptionLabel(o)),
                onClick: (y) => i.deselectButton(o)
              }, [
                (a(), w(S(i.childComponents.Deselect)))
              ], 8, ge)) : v("", !0)
            ], 8, fe))
          ])), 256))
        ], 8, pe),
        r(e.$slots, "search", h(u(i.scope.search)), () => [
          c("input", g({
            role: "combobox",
            class: "vs__search"
          }, i.scope.combobox.attributes, j(i.scope.combobox.events, !0)), null, 16)
        ])
      ], 512),
      c("div", ye, [
        V(c("button", {
          ref: "clearButton",
          disabled: s.disabled,
          type: "button",
          class: "vs__clear",
          title: i.i18n.clearButton.title,
          "aria-label": i.i18n.clearButton.ariaLabel,
          onClick: t[0] || (t[0] = (...o) => i.clearSelection && i.clearSelection(...o))
        }, [
          (a(), w(S(i.childComponents.Deselect)))
        ], 8, be), [
          [k, i.showClearButton]
        ]),
        r(e.$slots, "open-indicator", h(u(i.scope.openIndicator)), () => [
          s.noDrop ? v("", !0) : (a(), w(S(i.childComponents.OpenIndicator), h(g({ key: 0 }, i.scope.openIndicator.attributes)), null, 16))
        ]),
        r(e.$slots, "spinner", h(u(i.scope.spinner)), () => [
          V(c("div", { class: "vs__spinner" }, b(i.i18n.spinner.text), 513), [
            [k, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 544),
    R(z, { name: s.transition }, {
      default: q(() => [
        i.dropdownOpen ? V((a(), d("ul", g({
          key: 0,
          ref: "dropdownMenu",
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1"
        }, i.scope.listbox.attributes, {
          onMousedown: t[2] || (t[2] = F((...o) => i.onMousedown && i.onMousedown(...o), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...o) => i.onMouseUp && i.onMouseUp(...o))
        }), [
          r(e.$slots, "list-header", h(u(i.scope.listHeader))),
          (a(!0), d(x, null, A(i.filteredOptions, (o, f) => (a(), d("li", {
            id: `vs${s.uid}__option-${f}`,
            key: s.getOptionKey(o),
            role: "option",
            class: D(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": i.isOptionDeselectable(o) && f === e.typeAheadPointer,
              "vs__dropdown-option--selected": i.isOptionSelected(o),
              "vs__dropdown-option--highlight": f === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !s.selectable(o)
            }]),
            "aria-selected": i.isOptionSelected(o) ? "true" : "false",
            onMouseover: (y) => s.selectable(o) ? e.typeAheadPointer = f : null,
            onClick: F((y) => s.selectable(o) ? i.select(o) : null, ["prevent", "stop"])
          }, [
            r(e.$slots, "option", g({ ref_for: !0 }, i.normalizeOptionForSlot(o)), () => [
              _(b(s.getOptionLabel(o)), 1)
            ])
          ], 42, me))), 128)),
          i.filteredOptions.length === 0 ? (a(), d("li", Oe, [
            r(e.$slots, "no-options", h(u(i.scope.noOptions)), () => [
              _(b(i.i18n.noOptions.text), 1)
            ])
          ])) : v("", !0),
          r(e.$slots, "list-footer", h(u(i.scope.listFooter)))
        ], 16)), [
          [m]
        ]) : (a(), d("ul", {
          key: 1,
          id: s.listboxID,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, _e))
      ]),
      _: 3
    }, 8, ["name"]),
    r(e.$slots, "footer", h(u(i.scope.footer)))
  ], 10, ce);
}
const Ve = /* @__PURE__ */ C(he, [["render", we]]);
export {
  Ve as default
};
