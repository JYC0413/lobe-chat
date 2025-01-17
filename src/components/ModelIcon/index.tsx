import {
  Anthropic,
  Aws,
  Baichuan,
  ChatGLM,
  Gemini,
  Meta,
  Minimax,
  Mistral,
  Moonshot,
  OpenAI,
  Tongyi,
} from '@lobehub/icons';
import {memo} from 'react';

interface ModelProviderIconProps {
  model?: string;
  size?: number;
}

const ModelIcon = memo<ModelProviderIconProps>(({ model, size = 12 }) => {
  if (!model) return;

  if (model.startsWith('gpt-3')) return <OpenAI.Avatar size={size} type={'gpt3'} />;
  if (model.startsWith('gpt-4')) return <OpenAI.Avatar size={size} type={'gpt4'} />;
  if (model.startsWith('glm')) return <ChatGLM.Avatar size={size} />;
  if (model.includes('claude')) return <Anthropic.Avatar size={size} />;
  if (model.includes('titan')) return <Aws.Avatar size={size} />;
  if (model.includes('llama')) return <Meta.Avatar size={size} />;
  if (model.includes('gemini')) return <Gemini.Avatar size={size} />;
  if (model.includes('qwen')) return <Tongyi.Avatar background={Tongyi.colorPrimary} size={size} />;
  if (model.includes('minmax')) return <Minimax.Avatar size={size} />;
  if (model.includes('moonshot')) return <Moonshot.Avatar size={size} />;
  if (model.includes('baichuan'))
    return <Baichuan.Avatar background={Baichuan.colorPrimary} size={size} />;
  if (model.includes('mistral')) return <Mistral.Avatar size={size} />;
});

export default ModelIcon;
