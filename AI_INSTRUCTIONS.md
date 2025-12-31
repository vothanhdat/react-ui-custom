# AI Instructions — Planning & Implementing Components (ChatGPT / Cursor / Copilot)

This repo is a React UI library. Most components are created using `elFactory()` and class-prop mapping objects from `src/components/_base.ts`.

Use this document as a **copy/paste prompt** for AI tools (ChatGPT, Cursor, Copilot, CodeGPT-like tools) to plan and implement new components in a consistent way.

---

## 1) Repo facts the AI must respect

- **Component pattern:** `elFactory()` in `src/core/elFactory.tsx`.
- **Props → className:** `propsToClassNameFactory()` in `src/core/propsToClassNameFactory.ts`.
- **CSS:** shared utility CSS lives in `src/components/css/*.css` and components commonly import `src/components/css/index.css`.
- **Class naming convention for enum props:** for array params, `propsToClassNameFactory()` emits `${propName}-${value}` (example: `variant="filled"` → class `variant-filled`).
- **Exports:** The public API is `src/index.ts` (currently minimal). Prefer adding/maintaining barrel exports in `src/components/index.ts`.

Non-goals unless explicitly requested:
- Don’t introduce new visual themes, colors, or design tokens casually.
- Don’t add new build tools or heavy deps unless a component truly needs them.

---

## 2) Definition of Done (DoD) for a new component

For each new component, the AI should complete all items:

- **Implementation** in `src/components/<Name>/index.tsx` using `elFactory()` unless behavior requires a custom component.
- **Types**: prop types are inferred from `elFactory` mappings; only add extra props when needed.
- **CSS**: reuse existing utility classes; only add CSS if missing.
- **Storybook story** in `src/components/<Name>/<Name>.stories.tsx`
  - Must show major variants (colors, shapes, loading/disabled, layout).
  - If component is an `elFactory` component, use `getStoryBookArgTypes()`.
- **Exports**:
  - export from `src/components/index.ts`
  - export from `src/index.ts`
- **Build sanity check**: `yarn build` must pass.

---

## 3) Copy/paste: Component planning prompt

Use this when you want the AI to propose a spec before coding.

**Prompt:**

> You are a senior UI library engineer working in an existing Vite+React+TS UI library.
> 
> Goal: Add a new component named: **<ComponentName>**.
> 
> Constraints:
> - Follow the existing patterns:
>   - use `elFactory()` and props-to-class mapping from `src/components/_base.ts` whenever possible
>   - enum props map to `${propName}-${value}` CSS classes
> - Reuse existing CSS utilities in `src/components/css/*`.
> - Do not invent new themes or hard-coded colors.
> - Keep public API stable and minimal.
> 
> Deliverables:
> 1) A short spec: purpose, DOM element(s), props, class mappings, a11y considerations.
> 2) Storybook coverage list (which stories/variants).
> 3) Files to create/edit (exact paths).
> 4) Risks/unknowns.

---

## 4) Copy/paste: Implementation prompt (do the code)

Use this when you want the AI to implement directly.

**Prompt:**

> Implement **<ComponentName>** in this repo.
> 
> Requirements:
> - Use `elFactory()` unless behavior truly requires custom state/effects.
> - Define prop→class mappings (prefer reusing mappings from `src/components/_base.ts`).
> - Reuse existing CSS utilities; add new CSS only if absolutely needed.
> - Add Storybook story using `getStoryBookArgTypes()` when applicable.
> - Export from `src/components/index.ts` and `src/index.ts`.
> - Run `yarn build` (and `yarn storybook` only if needed).
> 
> Output:
> - Make the code changes directly.
> - Summarize what changed and where.

---

## 5) “Recipe” the AI should follow internally (so it doesn’t miss steps)

1. Search for existing similar components (e.g. Button, Typo, Section).
2. Decide the base element (`button`, `div`, etc.) or use `DynamicElFactory` if polymorphic.
3. Define mapping object:
   - boolean props: `{ isLoading: 'loading' }`
   - enum props: `{ variant: ['filled','outlined'] as const }` → classes `variant-filled`, `variant-outlined`
4. Create component with `elFactory(El, baseClasses, mapping, defaultProps, "Name")`.
5. Add story with controls and variants.
6. Add exports.
7. Run `yarn build`.

---

## 6) Suggested next components (easy wins)

These map cleanly to your current system:
- `Badge` (span/div) with `color`, `variant`, `small/medium/large`
- `Divider` (hr/div) with `vertical`, `spaced`
- `Card` (div/section) with `variant`, `isElevated`, padding/layout props
- `Input` (input) with `variant`, `isInvalid`, `isLoading`

If you tell me which 1–2 you want first, I can implement them in this repo following the DoD above.
