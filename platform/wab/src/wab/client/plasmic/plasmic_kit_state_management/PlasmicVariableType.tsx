// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: frhoorZk3bxNXU73uUyvHm
// Component: sHz-uchOcJ

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName,
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions,
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import projectcss from "./plasmic_plasmic_kit_state_management.module.css"; // plasmic-import: frhoorZk3bxNXU73uUyvHm/projectcss
import sty from "./PlasmicVariableType.module.css"; // plasmic-import: sHz-uchOcJ/css

createPlasmicElementProxy;

export type PlasmicVariableType__VariantMembers = {
  type: "text" | "boolean" | "number" | "object" | "array" | "variant";
};
export type PlasmicVariableType__VariantsArgs = {
  type?: SingleChoiceArg<
    "text" | "boolean" | "number" | "object" | "array" | "variant"
  >;
};
type VariantPropType = keyof PlasmicVariableType__VariantsArgs;
export const PlasmicVariableType__VariantProps = new Array<VariantPropType>(
  "type"
);

export type PlasmicVariableType__ArgsType = {};
type ArgPropType = keyof PlasmicVariableType__ArgsType;
export const PlasmicVariableType__ArgProps = new Array<ArgPropType>();

export type PlasmicVariableType__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  text?: Flex__<"div">;
};

export interface DefaultVariableTypeProps {
  type?: SingleChoiceArg<
    "text" | "boolean" | "number" | "object" | "array" | "variant"
  >;
  className?: string;
}

const $$ = {};

function PlasmicVariableType__RenderFunc(props: {
  variants: PlasmicVariableType__VariantsArgs;
  args: PlasmicVariableType__ArgsType;
  overrides: PlasmicVariableType__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_new_design_system_former_style_controls_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text,
            {
              [sty.texttype_array]: hasVariant($state, "type", "array"),
              [sty.texttype_boolean]: hasVariant($state, "type", "boolean"),
              [sty.texttype_number]: hasVariant($state, "type", "number"),
              [sty.texttype_object]: hasVariant($state, "type", "object"),
              [sty.texttype_variant]: hasVariant($state, "type", "variant"),
            }
          )}
        >
          {hasVariant($state, "type", "variant")
            ? "\ud83d\uddf2"
            : hasVariant($state, "type", "array")
            ? "[ ]"
            : hasVariant($state, "type", "object")
            ? "{ }"
            : hasVariant($state, "type", "number")
            ? "123"
            : hasVariant($state, "type", "boolean")
            ? "0/1"
            : "abc"}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "text"],
  freeBox: ["freeBox", "text"],
  text: ["text"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicVariableType__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicVariableType__VariantsArgs;
    args?: PlasmicVariableType__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicVariableType__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicVariableType__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicVariableType__ArgProps,
          internalVariantPropNames: PlasmicVariableType__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicVariableType__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicVariableType";
  } else {
    func.displayName = `PlasmicVariableType.${nodeName}`;
  }
  return func;
}

export const PlasmicVariableType = Object.assign(
  // Top-level PlasmicVariableType renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicVariableType
    internalVariantProps: PlasmicVariableType__VariantProps,
    internalArgProps: PlasmicVariableType__ArgProps,
  }
);

export default PlasmicVariableType;
/* prettier-ignore-end */
