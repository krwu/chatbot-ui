import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_AZ = 'gpt-35-turbo',
  GPT_4 = 'gpt-4',
  GPT_4_TURBO = 'gpt-4-1106-preview',
  // GPT_3_5_0613 = 'gpt-3.5-turbo-0613',
  // GPT_3_5_16k_0613 = 'gpt-3.5-turbo-16k-0613',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
/* 
  [OpenAIModelID.GPT_3_5_16K]: {
    id: OpenAIModelID.GPT_3_5_16K,
    name: 'GPT-3.5-16k',
    maxLength: 45000,
    tokenLimit: 15000,
  },

  [OpenAIModelID.GPT_3_5_0613]: {
    id: OpenAIModelID.GPT_3_5_0613,
    name: 'GPT-3.5-0613',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_16k_0613]: {
    id: OpenAIModelID.GPT_3_5_16k_0613,
    name: 'GPT-3.5-16k-0613',
    maxLength: 48000,
    tokenLimit: 16000,
  },
*/
  [OpenAIModelID.GPT_3_5_AZ]: {
    id: OpenAIModelID.GPT_3_5_AZ,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4_TURBO]: {
    id: OpenAIModelID.GPT_4_TURBO,
    name: 'GPT-4-TURBO',
    maxLength: 380000,
    tokenLimit: 128000,
  },
};
