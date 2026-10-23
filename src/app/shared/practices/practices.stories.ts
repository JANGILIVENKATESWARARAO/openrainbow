import type { Meta, StoryObj } from '@storybook/angular';
import { PracticesComponent } from './practices.component';
import services from '../../../../public/data/services.json';
import type { ServicesData } from '../../core/models/content';

const data = services as unknown as ServicesData;

const meta: Meta<PracticesComponent> = {
  title: 'Shared/Practices',
  component: PracticesComponent,
  args: { practices: data.practices, detailed: false },
};
export default meta;

type Story = StoryObj<PracticesComponent>;

/** Compact cards, as on the home page. */
export const Cards: Story = {};

/** Full detail, as on the Services page. */
export const Detailed: Story = { args: { detailed: true } };
