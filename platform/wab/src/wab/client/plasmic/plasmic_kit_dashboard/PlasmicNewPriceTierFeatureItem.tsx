// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE
// Component: i3cs7u1d-ck

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../PP__plasmickit_dashboard.module.css"; // plasmic-import: ooL7EhXDmFQWnW9sxtchhE/projectcss
import sty from "./PlasmicNewPriceTierFeatureItem.module.css"; // plasmic-import: i3cs7u1d-ck/css

import Star2Icon from "../plasmic_kit_icons/icons/PlasmicIcon__Star2"; // plasmic-import: InkxX5RyM/icon

createPlasmicElementProxy;

export type PlasmicNewPriceTierFeatureItem__VariantMembers = {
  tier: "free" | "starter" | "pro" | "team" | "enterprise";
  specialSectionHeading: "specialSectionHeading";
};
export type PlasmicNewPriceTierFeatureItem__VariantsArgs = {
  tier?: SingleChoiceArg<"free" | "starter" | "pro" | "team" | "enterprise">;
  specialSectionHeading?: SingleBooleanChoiceArg<"specialSectionHeading">;
};
type VariantPropType = keyof PlasmicNewPriceTierFeatureItem__VariantsArgs;
export const PlasmicNewPriceTierFeatureItem__VariantProps =
  new Array<VariantPropType>("tier", "specialSectionHeading");

export type PlasmicNewPriceTierFeatureItem__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicNewPriceTierFeatureItem__ArgsType;
export const PlasmicNewPriceTierFeatureItem__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicNewPriceTierFeatureItem__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultNewPriceTierFeatureItemProps {
  children?: React.ReactNode;
  tier?: SingleChoiceArg<"free" | "starter" | "pro" | "team" | "enterprise">;
  specialSectionHeading?: SingleBooleanChoiceArg<"specialSectionHeading">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicNewPriceTierFeatureItem__RenderFunc(props: {
  variants: PlasmicNewPriceTierFeatureItem__VariantsArgs;
  args: PlasmicNewPriceTierFeatureItem__ArgsType;
  overrides: PlasmicNewPriceTierFeatureItem__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "tier",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.tier,
      },
      {
        path: "specialSectionHeading",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.specialSectionHeading,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  return (
    <p.Stack
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
        sty.root,
        {
          [sty.rootspecialSectionHeading]: hasVariant(
            $state,
            "specialSectionHeading",
            "specialSectionHeading"
          ),
          [sty.roottier_enterprise]: hasVariant($state, "tier", "enterprise"),
          [sty.roottier_free]: hasVariant($state, "tier", "free"),
          [sty.roottier_pro]: hasVariant($state, "tier", "pro"),
          [sty.roottier_starter]: hasVariant($state, "tier", "starter"),
          [sty.roottier_team]: hasVariant($state, "tier", "team"),
        }
      )}
    >
      <Star2Icon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg, {
          [sty.svgspecialSectionHeading]: hasVariant(
            $state,
            "specialSectionHeading",
            "specialSectionHeading"
          ),
          [sty.svgtier_enterprise]: hasVariant($state, "tier", "enterprise"),
          [sty.svgtier_free]: hasVariant($state, "tier", "free"),
          [sty.svgtier_pro]: hasVariant($state, "tier", "pro"),
          [sty.svgtier_starter]: hasVariant($state, "tier", "starter"),
          [sty.svgtier_team]: hasVariant($state, "tier", "team"),
        })}
        role={"img"}
      />

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxtier_enterprise]: hasVariant(
            $state,
            "tier",
            "enterprise"
          ),
          [sty.freeBoxtier_free]: hasVariant($state, "tier", "free"),
          [sty.freeBoxtier_team]: hasVariant($state, "tier", "team"),
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "What a cool feature",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenspecialSectionHeading]: hasVariant(
              $state,
              "specialSectionHeading",
              "specialSectionHeading"
            ),
            [sty.slotTargetChildrentier_enterprise]: hasVariant(
              $state,
              "tier",
              "enterprise"
            ),
            [sty.slotTargetChildrentier_free]: hasVariant(
              $state,
              "tier",
              "free"
            ),
            [sty.slotTargetChildrentier_pro]: hasVariant($state, "tier", "pro"),
            [sty.slotTargetChildrentier_starter]: hasVariant(
              $state,
              "tier",
              "starter"
            ),
            [sty.slotTargetChildrentier_team]: hasVariant(
              $state,
              "tier",
              "team"
            ),
          }),
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg", "freeBox"],
  svg: ["svg"],
  freeBox: ["freeBox"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewPriceTierFeatureItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPriceTierFeatureItem__VariantsArgs;
    args?: PlasmicNewPriceTierFeatureItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewPriceTierFeatureItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewPriceTierFeatureItem__ArgsType,
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
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNewPriceTierFeatureItem__ArgProps,
          internalVariantPropNames:
            PlasmicNewPriceTierFeatureItem__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicNewPriceTierFeatureItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPriceTierFeatureItem";
  } else {
    func.displayName = `PlasmicNewPriceTierFeatureItem.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPriceTierFeatureItem = Object.assign(
  // Top-level PlasmicNewPriceTierFeatureItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicNewPriceTierFeatureItem
    internalVariantProps: PlasmicNewPriceTierFeatureItem__VariantProps,
    internalArgProps: PlasmicNewPriceTierFeatureItem__ArgProps,
  }
);

export default PlasmicNewPriceTierFeatureItem;
/* prettier-ignore-end */