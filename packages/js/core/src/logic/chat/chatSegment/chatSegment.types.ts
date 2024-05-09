import {ChatSegmentStatus} from '../../../../../../shared/src/types/chatSegment/chatSegment';
import {HighlighterExtension} from '../../../exports/aiChat/highlighter/highlighter';

export type CompChatSegmentProps = Readonly<{
    uid: string;
    status: ChatSegmentStatus;
    markdownLinkTarget?: 'blank' | 'self';
    showCodeBlockCopyButton?: boolean;
    skipStreamingAnimation?: boolean;
    syntaxHighlighter?: HighlighterExtension;
    streamingAnimationSpeed?: number;
}>;

export type CompChatSegmentElements = {
    chatSegmentContainer: HTMLElement;
    loaderContainer?: HTMLElement;
};

export type CompChatSegmentActions = Readonly<{
    showLoader: () => void;
    hideLoader: () => void;
}>;

export type CompChatSegmentEvents = 'chat-segment-ready' | 'loader-shown' | 'loader-hidden';
