// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: frhoorZk3bxNXU73uUyvHm
// Component: jiD9NQWVHe

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

import VariableType from "../../components/sidebar-tabs/StateManagement/VariableType"; // plasmic-import: sHz-uchOcJ/component
import MenuButton from "../../components/widgets/MenuButton"; // plasmic-import: h69wHrrKtL/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import projectcss from "./plasmic_plasmic_kit_state_management.module.css"; // plasmic-import: frhoorZk3bxNXU73uUyvHm/projectcss
import sty from "./PlasmicVariableRow.module.css"; // plasmic-import: jiD9NQWVHe/css

import ArrowTopRightIcon from "../plasmic_kit/PlasmicIcon__ArrowTopRight"; // plasmic-import: fs4_EBy1h8PAh/icon

createPlasmicElementProxy;

export type PlasmicVariableRow__VariantMembers = {
  isExternal: "isExternal";
  hideValue: "hideValue";
  hideMenu: "hideMenu";
};
export type PlasmicVariableRow__VariantsArgs = {
  isExternal?: SingleBooleanChoiceArg<"isExternal">;
  hideValue?: SingleBooleanChoiceArg<"hideValue">;
  hideMenu?: SingleBooleanChoiceArg<"hideMenu">;
};
type VariantPropType = keyof PlasmicVariableRow__VariantsArgs;
export const PlasmicVariableRow__VariantProps = new Array<VariantPropType>(
  "isExternal",
  "hideValue",
  "hideMenu"
);

export type PlasmicVariableRow__ArgsType = {
  name?: React.ReactNode;
  value?: React.ReactNode;
  leftPadding?: number;
  variableType?: string;
};
type ArgPropType = keyof PlasmicVariableRow__ArgsType;
export const PlasmicVariableRow__ArgProps = new Array<ArgPropType>(
  "name",
  "value",
  "leftPadding",
  "variableType"
);

export type PlasmicVariableRow__OverridesType = {
  root?: Flex__<"div">;
  variableType?: Flex__<typeof VariableType>;
  svg?: Flex__<"svg">;
  menuButton?: Flex__<typeof MenuButton>;
};

export interface DefaultVariableRowProps {
  name?: React.ReactNode;
  value?: React.ReactNode;
  leftPadding?: number;
  variableType?: string;
  isExternal?: SingleBooleanChoiceArg<"isExternal">;
  hideValue?: SingleBooleanChoiceArg<"hideValue">;
  hideMenu?: SingleBooleanChoiceArg<"hideMenu">;
  className?: string;
}

const $$ = {};

function PlasmicVariableRow__RenderFunc(props: {
  variants: PlasmicVariableRow__VariantsArgs;
  args: PlasmicVariableRow__ArgsType;
  overrides: PlasmicVariableRow__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          variableType: "number",
        },
        props.args
      ),
    [props.args]
  );

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
        path: "isExternal",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isExternal,
      },
      {
        path: "hideValue",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hideValue,
      },
      {
        path: "hideMenu",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hideMenu,
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

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover,
  };

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_new_design_system_former_style_controls_css.plasmic_tokens,
        sty.root,
        {
          [sty.roothideValue]: hasVariant($state, "hideValue", "hideValue"),
          [sty.rootisExternal]: hasVariant($state, "isExternal", "isExternal"),
        }
      )}
      style={(() => {
        try {
          return {
            ...($props.leftPadding
              ? {
                  "padding-left": $props.leftPadding,
                }
              : {}),
          };
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return undefined;
          }
          throw e;
        }
      })()}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <VariableType
        data-plasmic-name={"variableType"}
        data-plasmic-override={overrides.variableType}
        className={classNames("__wab_instance", sty.variableType)}
        type={$props.variableType}
      />

      <div
        className={classNames(projectcss.all, sty.freeBox__vYiqk, {
          [sty.freeBoxhideValue__vYiqkIc4Vi]: hasVariant(
            $state,
            "hideValue",
            "hideValue"
          ),
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox___7S0Wf, {
            [sty.freeBoxhideMenu___7S0WfDmEuf]: hasVariant(
              $state,
              "hideMenu",
              "hideMenu"
            ),
            [sty.freeBoxhideValue___7S0WfIc4Vi]: hasVariant(
              $state,
              "hideValue",
              "hideValue"
            ),
            [sty.freeBoxisExternal___7S0Wfl0Lrs]: hasVariant(
              $state,
              "isExternal",
              "isExternal"
            ),
          })}
        >
          {renderPlasmicSlot({
            defaultContents: "count",
            value: args.name,
          })}
        </div>
        <div
          className={classNames(projectcss.all, sty.freeBox__mOc9Q, {
            [sty.freeBoxhideMenu__mOc9QDmEuf]: hasVariant(
              $state,
              "hideMenu",
              "hideMenu"
            ),
            [sty.freeBoxhideValue__mOc9QIc4Vi]: hasVariant(
              $state,
              "hideValue",
              "hideValue"
            ),
            [sty.freeBoxisExternal__mOc9Ql0Lrs]: hasVariant(
              $state,
              "isExternal",
              "isExternal"
            ),
          })}
        >
          {renderPlasmicSlot({
            defaultContents: "1",
            value: args.value,
            className: classNames(sty.slotTargetValue),
          })}
        </div>
      </div>
      <ArrowTopRightIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg, {
          [sty.svghideMenu]: hasVariant($state, "hideMenu", "hideMenu"),
          [sty.svgisExternal]: hasVariant($state, "isExternal", "isExternal"),
        })}
        role={"img"}
      />

      <div
        className={classNames(projectcss.all, sty.freeBox__pRutb, {
          [sty.freeBoxhideMenu__pRutbDmEuf]: hasVariant(
            $state,
            "hideMenu",
            "hideMenu"
          ),
        })}
      >
        <MenuButton
          data-plasmic-name={"menuButton"}
          data-plasmic-override={overrides.menuButton}
          className={classNames("__wab_instance", sty.menuButton)}
        />
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "variableType", "svg", "menuButton"],
  variableType: ["variableType"],
  svg: ["svg"],
  menuButton: ["menuButton"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  variableType: typeof VariableType;
  svg: "svg";
  menuButton: typeof MenuButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicVariableRow__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicVariableRow__VariantsArgs;
    args?: PlasmicVariableRow__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicVariableRow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicVariableRow__ArgsType,
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
          internalArgPropNames: PlasmicVariableRow__ArgProps,
          internalVariantPropNames: PlasmicVariableRow__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicVariableRow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicVariableRow";
  } else {
    func.displayName = `PlasmicVariableRow.${nodeName}`;
  }
  return func;
}

export const PlasmicVariableRow = Object.assign(
  // Top-level PlasmicVariableRow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    variableType: makeNodeComponent("variableType"),
    svg: makeNodeComponent("svg"),
    menuButton: makeNodeComponent("menuButton"),

    // Metadata about props expected for PlasmicVariableRow
    internalVariantProps: PlasmicVariableRow__VariantProps,
    internalArgProps: PlasmicVariableRow__ArgProps,
  }
);

export default PlasmicVariableRow;
/* prettier-ignore-end */
