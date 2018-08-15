export const CREATE_CHANNEL_MODAL = 'CREATE_CHANNEL_MODAL';
export const EDIT_CHANNEL_MODAL = 'EDIT_CHANNEL_MODAL';
export const CLEAR_MODAL = 'CLEAR_MODAL';

export const createChannelModal = () => ({
    type: CREATE_CHANNEL_MODAL,
});

export const editChannelModal = () => ({
    type: EDIT_CHANNEL_MODAL
});

export const clearModal = () => ({
    type: CLEAR_MODAL
});
