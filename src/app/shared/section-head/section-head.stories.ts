import type { Meta, StoryObj } from '@storybook/angular';
import { SectionHeadComponent } from './section-head.component';

const meta: Meta<SectionHeadComponent> = {
  title: 'Shared/Section heading',
  component: SectionHeadComponent,
  args: {
    heading: {
      eyebrow: 'How we work with you',
      title: 'One partner across the',
      emphasis: 'full IT life cycle',
      lead: 'Start a project with us or bring us in at any stage.',
    },
    center: false,
    dark: false,
  },
};
export default meta;

type Story = StoryObj<SectionHeadComponent>;

export const Left: Story = {};
export const Centred: Story = { args: { center: true } };
