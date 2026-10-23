import type { Meta, StoryObj } from '@storybook/angular';
import { ThemeToggleComponent } from './theme-toggle.component';

const meta: Meta<ThemeToggleComponent> = {
  title: 'Shared/Theme toggle',
  component: ThemeToggleComponent,
};
export default meta;

/** Click to switch the whole page between light and dark. */
export const Default: StoryObj<ThemeToggleComponent> = {};
