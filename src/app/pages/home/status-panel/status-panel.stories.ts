import type { Meta, StoryObj } from '@storybook/angular';
import { StatusPanelComponent } from './status-panel.component';
import site from '../../../../../public/data/site.json';
import type { SiteData } from '../../../core/models/site';

const meta: Meta<StatusPanelComponent> = {
  title: 'Home/Status panel',
  component: StatusPanelComponent,
  args: { data: (site as unknown as SiteData).home.monitoring },
  render: (args) => ({
    props: args,
    template: `<div class="band" style="padding:32px;border-radius:18px;max-width:760px"><or-status-panel [data]="data" /></div>`,
  }),
};
export default meta;

export const Default: StoryObj<StatusPanelComponent> = {};
