import type { Meta, StoryObj } from '@storybook/angular';
import { OpsHubComponent } from './ops-hub.component';
import site from '../../../../../public/data/site.json';
import type { SiteData } from '../../../core/models/site';

const home = (site as unknown as SiteData).home;

const meta: Meta<OpsHubComponent> = {
  title: 'Home/Operations hub',
  component: OpsHubComponent,
  args: {
    data: home.monitoring,
    steps: home.approach.steps,
    stats: [
      { value: '24/7', label: 'Monitoring' },
      { value: '11+', label: 'Vendors' },
      { value: '12 yrs', label: 'In service' },
    ],
  },
  render: (args) => ({
    props: args,
    template: `<div style="max-width:1160px"><or-ops-hub [data]="data" [steps]="steps" [stats]="stats" /></div>`,
  }),
};
export default meta;

export const Default: StoryObj<OpsHubComponent> = {};
