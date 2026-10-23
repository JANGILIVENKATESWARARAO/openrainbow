import type { Meta, StoryObj } from '@storybook/angular';
import { PageHeroComponent } from './page-hero.component';

const meta: Meta<PageHeroComponent> = {
  title: 'Shared/Page hero',
  component: PageHeroComponent,
  parameters: { layout: 'fullscreen' },
  args: {
    crumb: 'Services',
    heading: {
      eyebrow: 'Services',
      title: 'A complete life cycle of',
      emphasis: 'IT services',
      lead: 'We can start a project with you or join at any stage.',
    },
  },
};
export default meta;

type Story = StoryObj<PageHeroComponent>;

export const Default: Story = {};

export const DetailPage: Story = {
  args: {
    crumb: 'OTDR fibre testing',
    parent: { label: 'Services', path: '/services' },
    icon: 'pulse',
    heading: { eyebrow: 'Precision optical fibre testing', title: 'OTDR fibre testing' },
  },
};
