import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
} from "@chakra-ui/react";

/**
 * ExpPopover Component
 *
 * A customizable popover component built using Chakra UI's Popover component.
 * It provides a convenient way to display additional content, headers, footers,
 * and control width, height, and other properties of the popover.
 *
 * @component
 * @example
 * // Usage in other components:
 * import ExpPopover from '~/components/ExpPopover';
 *
 * const MyComponent = () => {
 *   return (
 *     <ExpPopover
 *       matchWidth
 *       header="Popover Header"
 *       footer={<Button onClick={() => console.log('Footer Button Clicked')}>Footer Button</Button>}
 *     >
 *       <Button>Open Popover</Button>
 *     </ExpPopover>
 *   );
 * };
 *
 * @param {Object} props - The properties of the component.
 * @param {ReactNode} props.children - The trigger element that opens the popover.
 * @param {Function} props.content - The function that returns the content of the popover.
 * @param {ReactNode} props.header - The header content of the popover.
 * @param {ReactNode} props.footer - The footer content of the popover.
 * @param {string} props.width - The width of the popover content. Defaults to 'fit-content'.
 * @param {string} props.height - The maximum height of the popover body. Defaults to '240px'.
 * @param {boolean} props.matchWidth - Flag to match the width of the popover with the trigger.
 * @param {...Object} props - Additional properties to be passed to the Chakra UI Popover component.
 * @returns {JSX.Element} JSX element representing the ExpPopover component.
 */
export default function BHPopover({
  children,
  content,
  header,
  footer,
  width,
  heigth,
  matchWidth,
  ...props
}) {
  return (
    <Popover
      matchWidth={matchWidth}
      zIndex={5}
      placement="bottom"
      flip={false}
      style={{ zIndex: 5 }}
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent width={width ?? "fit-content"} {...props} zIndex={5}>
        {header && <PopoverHeader>{header}</PopoverHeader>}

        <PopoverBody maxHeight={heigth ?? "240px"} overflow="scroll">
          {content?.()}
        </PopoverBody>
        {footer && <PopoverFooter>{footer}</PopoverFooter>}
      </PopoverContent>
    </Popover>
  );
}
