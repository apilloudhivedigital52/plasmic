// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tXkSR39sgCDWSitZxC5xFV
// Component: znioE83CPU

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
import ListSectionHeader from "../../components/ListSectionHeader"; // plasmic-import: wNvxk7eOak/component
import IconButton from "../../components/widgets/IconButton"; // plasmic-import: LPry-TF4j22a/component
import ListItem from "../../components/ListItem"; // plasmic-import: v31d9_ANqk/component
import ListSectionSeparator from "../../components/ListSectionSeparator"; // plasmic-import: uG5_fPM0sK/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import sty from "./PlasmicListSection.module.css"; // plasmic-import: znioE83CPU/css

import PlusCirclesvgIcon from "../q_4_icons/icons/PlasmicIcon__PlusCirclesvg"; // plasmic-import: tPPI666-2/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon
import VariantGroupIcon from "../plasmic_kit/PlasmicIcon__VariantGroup"; // plasmic-import: pyS6pK4Spx-QF/icon
import ComponentIcon from "../plasmic_kit/PlasmicIcon__Component"; // plasmic-import: nNWEF4jI3s5DI/icon
import EyeIcon from "../plasmic_kit/PlasmicIcon__Eye"; // plasmic-import: A2FnGYgDh4e3U/icon

createPlasmicElementProxy;

export type PlasmicListSection__VariantMembers = {
  isLast: "isLast";
  collapseState: "collapsed" | "expanded";
};
export type PlasmicListSection__VariantsArgs = {
  isLast?: SingleBooleanChoiceArg<"isLast">;
  collapseState?: SingleChoiceArg<"collapsed" | "expanded">;
};
type VariantPropType = keyof PlasmicListSection__VariantsArgs;
export const PlasmicListSection__VariantProps = new Array<VariantPropType>(
  "isLast",
  "collapseState"
);

export type PlasmicListSection__ArgsType = {
  children?: React.ReactNode;
  title?: React.ReactNode;
};
type ArgPropType = keyof PlasmicListSection__ArgsType;
export const PlasmicListSection__ArgProps = new Array<ArgPropType>(
  "children",
  "title"
);

export type PlasmicListSection__OverridesType = {
  root?: p.Flex<"div">;
  listSectionHeader?: p.Flex<typeof ListSectionHeader>;
  iconButton?: p.Flex<typeof IconButton>;
  itemsContainer?: p.Flex<"div">;
  listSectionSeparator?: p.Flex<typeof ListSectionSeparator>;
};

export interface DefaultListSectionProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  isLast?: SingleBooleanChoiceArg<"isLast">;
  collapseState?: SingleChoiceArg<"collapsed" | "expanded">;
  className?: string;
}

const $$ = {};

function PlasmicListSection__RenderFunc(props: {
  variants: PlasmicListSection__VariantsArgs;
  args: PlasmicListSection__ArgsType;
  overrides: PlasmicListSection__OverridesType;
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
        path: "isLast",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isLast,
      },
      {
        path: "collapseState",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.collapseState,
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
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootcollapseState_collapsed]: hasVariant(
            $state,
            "collapseState",
            "collapsed"
          ),
        }
      )}
    >
      <ListSectionHeader
        data-plasmic-name={"listSectionHeader"}
        data-plasmic-override={overrides.listSectionHeader}
        actions={
          <IconButton
            data-plasmic-name={"iconButton"}
            data-plasmic-override={overrides.iconButton}
            children2={
              <ChevronDownsvgIcon
                className={classNames(projectcss.all, sty.svg__oLuZm)}
                role={"img"}
              />
            }
            className={classNames("__wab_instance", sty.iconButton)}
          >
            <PlusCirclesvgIcon
              className={classNames(projectcss.all, sty.svg__m72P3)}
              role={"img"}
            />
          </IconButton>
        }
        className={classNames("__wab_instance", sty.listSectionHeader, {
          [sty.listSectionHeadercollapseState_collapsed]: hasVariant(
            $state,
            "collapseState",
            "collapsed"
          ),
          [sty.listSectionHeadercollapseState_expanded]: hasVariant(
            $state,
            "collapseState",
            "expanded"
          ),
        })}
        collapseState={
          hasVariant($state, "collapseState", "expanded")
            ? "expanded"
            : hasVariant($state, "collapseState", "collapsed")
            ? "collapsed"
            : undefined
        }
        icon={
          <VariantGroupIcon
            className={classNames(projectcss.all, sty.svg___42FXn)}
            role={"img"}
          />
        }
      >
        {p.renderPlasmicSlot({
          defaultContents: "List Item Section",
          value: args.title,
        })}
      </ListSectionHeader>
      {(hasVariant($state, "collapseState", "collapsed") ? false : true) ? (
        <div
          data-plasmic-name={"itemsContainer"}
          data-plasmic-override={overrides.itemsContainer}
          className={classNames(projectcss.all, sty.itemsContainer, {
            [sty.itemsContainercollapseState_collapsed]: hasVariant(
              $state,
              "collapseState",
              "collapsed"
            ),
            [sty.itemsContainercollapseState_expanded]: hasVariant(
              $state,
              "collapseState",
              "expanded"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <ListItem
                  actions={
                    <EyeIcon
                      className={classNames(projectcss.all, sty.svg__nOeR)}
                      role={"img"}
                    />
                  }
                  icon={
                    <ComponentIcon
                      className={classNames(projectcss.all, sty.svg__qxi65)}
                      role={"img"}
                    />
                  }
                >
                  {"Item name"}
                </ListItem>
                <ListItem
                  actions={
                    <EyeIcon
                      className={classNames(projectcss.all, sty.svg__gp8QQ)}
                      role={"img"}
                    />
                  }
                  className={classNames("__wab_instance", sty.listItem__fHgE)}
                  icon={
                    <ComponentIcon
                      className={classNames(projectcss.all, sty.svg__qoaAq)}
                      role={"img"}
                    />
                  }
                >
                  {"Item name"}
                </ListItem>
                <ListItem
                  actions={
                    <EyeIcon
                      className={classNames(projectcss.all, sty.svg__v9X9I)}
                      role={"img"}
                    />
                  }
                  className={classNames("__wab_instance", sty.listItem__h0DR)}
                  icon={
                    <ComponentIcon
                      className={classNames(projectcss.all, sty.svg__l86PJ)}
                      role={"img"}
                    />
                  }
                >
                  {"Item name"}
                </ListItem>
              </React.Fragment>
            ),
            value: args.children,
          })}
        </div>
      ) : null}
      {(hasVariant($state, "isLast", "isLast") ? false : true) ? (
        <ListSectionSeparator
          data-plasmic-name={"listSectionSeparator"}
          data-plasmic-override={overrides.listSectionSeparator}
          className={classNames("__wab_instance", sty.listSectionSeparator, {
            [sty.listSectionSeparatorcollapseState_collapsed]: hasVariant(
              $state,
              "collapseState",
              "collapsed"
            ),
            [sty.listSectionSeparatorisLast]: hasVariant(
              $state,
              "isLast",
              "isLast"
            ),
          })}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "listSectionHeader",
    "iconButton",
    "itemsContainer",
    "listSectionSeparator",
  ],
  listSectionHeader: ["listSectionHeader", "iconButton"],
  iconButton: ["iconButton"],
  itemsContainer: ["itemsContainer"],
  listSectionSeparator: ["listSectionSeparator"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  listSectionHeader: typeof ListSectionHeader;
  iconButton: typeof IconButton;
  itemsContainer: "div";
  listSectionSeparator: typeof ListSectionSeparator;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicListSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicListSection__VariantsArgs;
    args?: PlasmicListSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicListSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicListSection__ArgsType,
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
          internalArgPropNames: PlasmicListSection__ArgProps,
          internalVariantPropNames: PlasmicListSection__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicListSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicListSection";
  } else {
    func.displayName = `PlasmicListSection.${nodeName}`;
  }
  return func;
}

export const PlasmicListSection = Object.assign(
  // Top-level PlasmicListSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    listSectionHeader: makeNodeComponent("listSectionHeader"),
    iconButton: makeNodeComponent("iconButton"),
    itemsContainer: makeNodeComponent("itemsContainer"),
    listSectionSeparator: makeNodeComponent("listSectionSeparator"),

    // Metadata about props expected for PlasmicListSection
    internalVariantProps: PlasmicListSection__VariantProps,
    internalArgProps: PlasmicListSection__ArgProps,
  }
);

export default PlasmicListSection;
/* prettier-ignore-end */
