export type State = {
    selectedId: number;
    message: string;
    drafts: Record<number, string>;
};

export type Action = {
    type: 'changed_selection';
    contactId: number;
} | {
    type: 'edited_message';
    message: string;
} | {
    type: 'sent_message';
};

export const initialState = {
    selectedId: 0,
    message: 'Hello',
    drafts: { 0: 'Hello' },
};

export function messengerReducer(
    state: State,
    action: Action
) {
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId,
                message: state.drafts[action.contactId] ?? '',
            };
        }
        case 'edited_message': {
            return {
                ...state,
                drafts: { ...state.drafts, [state.selectedId]: action.message },
                message: action.message,
            };
        }
        case 'sent_message': {
            return {
                ...state,
                drafts: { ...state.drafts, [state.selectedId]: '' },
                message: '',
            };
        }
        default: {
            throw Error(`Unknown action: ${(action as { type: string }).type}`);
        }
    }
}
