import * as Progress from '@radix-ui/react-progress';

interface IndicatorProps {
  value: number;
}

const Indicator = ({ value }: IndicatorProps) => {
  return (
    <Progress.Root
      value={value}
      className="relative h-1.5 w-full overflow-hidden rounded-full bg-grayscale-300"
    >
      <Progress.Indicator
        style={{ transform: `translateX(-${100 - value}%)` }}
        className="size-full bg-blue-500 transition-transform duration-[660ms]"
      />
    </Progress.Root>
  );
};

export { Indicator };
