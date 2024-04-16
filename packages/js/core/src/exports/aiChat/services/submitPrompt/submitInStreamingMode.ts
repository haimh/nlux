import {
    AiMessageChunkReceivedCallback,
    AiMessageStreamedCallback,
    AiMessageStreamStartedCallback,
    ChatSegmentCompleteCallback,
    ChatSegmentExceptionCallback,
} from '../../../../../../../shared/src/types/chatSegment/chatSegmentEvents';
import {ChatAdapter} from '../../../../types/adapters/chat/chatAdapter';
import {ChatAdapterExtras} from '../../../../types/adapters/chat/chatAdapterExtras';

export const submitInStreamingMode = async <AiMsg>(
    segmentId: string,
    prompt: string,
    adapter: ChatAdapter<AiMsg>,
    extras: ChatAdapterExtras<AiMsg>,
    aiMessageStreamStartedCallbacks: Set<AiMessageStreamStartedCallback>,
    aiMessageStreamedCallbacks: Set<AiMessageStreamedCallback>,
    aiMessageChunkReceivedCallbacks: Set<AiMessageChunkReceivedCallback>,
    chatSegmentCompleteCallbacks: Set<ChatSegmentCompleteCallback<AiMsg>>,
    chatSegmentExceptionCallbacks: Set<ChatSegmentExceptionCallback>,
): Promise<void> => {
    // TODO
};