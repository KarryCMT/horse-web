import { withInstall } from '@/utils';
import OrganizeSelect from './src/OrganizeSelect.vue';
import OrganizeSelectAsync from './src/OrganizeSelectAsync.vue';
import DepSelect from './src/DepSelect.vue';
import DepSelectAsync from './src/DepSelectAsync.vue';
import PosSelect from './src/PosSelect.vue';
import GroupSelect from './src/GroupSelect.vue';
import RoleSelect from './src/RoleSelect.vue';
import UserSelect from './src/UserSelect.vue';
import UsersSelect from './src/UsersSelect.vue';

const isAsync = true;

export const JnpfOrganizeSelect = withInstall(isAsync ? OrganizeSelectAsync : OrganizeSelect);
export const JnpfDepSelect = withInstall(isAsync ? DepSelectAsync : DepSelect);
export const JnpfPosSelect = withInstall(PosSelect);
export const JnpfGroupSelect = withInstall(GroupSelect);
export const JnpfRoleSelect = withInstall(RoleSelect);
export const JnpfUserSelect = withInstall(UserSelect);
export const JnpfUsersSelect = withInstall(UsersSelect);