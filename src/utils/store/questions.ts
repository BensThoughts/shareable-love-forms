import { FormState } from '@app/utils/store/formsSlice';

export type ResponseOption =  'N/A' | 'Must Have' | 'Like To Have' | 'Maybe' | 'Off Limits';

// export interface Responses {
//   [label: string]: {
//     responseOptions: string[],
//     selectedResponse: string,
//     hoverOver?: string,
//   };
// }

const DEFAULT_RESPONSE_OPTIONS: ResponseOption[] = ['N/A' , 'Must Have' , 'Like To Have' , 'Maybe' , 'Off Limits'];
const DEFAULT_RESPONSE: string = 'N/A';




export const nonEscalatorMenu: FormState = {
  formId: 'NonEscalatorRelationship',
  formName: 'Non Escalator Relationship',
  categories: {
    'Commitment': {
      categoryId: 'Commitment',
      categoryLabel: 'Commitment',
      nextCategoryId: 'PhysicalIntimacy',
      fields: {
        'marriage': {
          fieldId: 'marriage',
          fieldLabel: 'Marriage',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE},
        'sharing-pets': {
          fieldId: 'sharing-pets',
          fieldLabel: 'Sharing pet(s)',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'pregnancy-children': {
          fieldId: 'pregnancy-children',
          fieldLabel: 'Pregnancy/children together',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'coparenting': {
          fieldId: 'coparenting',
          fieldLabel: 'Coparenting children from other partners',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'having-a-key': {
          fieldId: 'having-a-key',
          fieldLabel: 'Having a key',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'cohabitation': {
          fieldId: 'cohabitation',
          fieldLabel: 'Cohabitation',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'home-ownership': {
          fieldId: 'home-ownership',
          fieldLabel: 'Home ownershipt',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'priority-over-other-partners': {
          fieldId: 'priority-over-other-partners',
          fieldLabel: 'Prioritization over other partners',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'relationship-labels': {
          fieldId: 'relationship-labels',
          fieldLabel: 'Relationship labels',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'planning-for-the-future': {
          fieldId: 'planning-for-the-future',
          fieldLabel: 'Planning for the future',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'expectation-of-long-term-involvement': {
          fieldId: 'expectation-of-long-term-involvement',
          fieldLabel: 'Expectation of long term involvement',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'commitment-to-working-through-challenges' : {
          fieldId: 'commitment-to-working-through-challenges',
          fieldLabel: 'Commitment to working through challenges',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'power-of-attorney' : {
          fieldId: 'power-of-attorney',
          fieldLabel: 'Power of attorney/wills',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'support-through-health-challenges': {
          fieldId: 'support-through-health-challenges',
          fieldLabel:  'Support through health challenges',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
      },
    },
    'PhysicalIntimacy': {
      categoryId: 'PhysicalIntimacy',
      categoryLabel: 'Physical Intimacy',
      nextCategoryId: 'EmotionalIntimacy',
      previousCategoryId: 'Commitment',
      fields: {
        'physical-affection' : {
          fieldId: 'physical-affection',
          fieldLabel: 'Physical affection',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'pda': {
          fieldId: 'pda',
          fieldLabel: 'PDA',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'compatible-sex-drive': {
          fieldId: 'compatible-sex-drive',
          fieldLabel: 'Compatible sex drive',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'sexual-chemistry': {
          fieldId: 'sexual-chemistry',
          fieldLabel: 'Sexual chemistry',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'orgasms': {
          fieldId: 'orgasms',
          fieldLabel: 'Orgasms',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'kissing': {
          fieldId: 'kissing',
          fieldLabel: 'Kissing',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'oral-sex': {
          fieldId: 'oral-sex',
          fieldLabel: 'Oral sex',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'manual-sex': {
          fieldId: 'manual-sex',
          fieldLabel: 'Manual sex (fingering)',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'mutual-masturbation': {
          fieldId: 'mutual-masturbation',
          fieldLabel: 'Mutual masturbation',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'penetration': {
          fieldId: 'penetration',
          fieldLabel: 'Penetration/PIV',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'using-sex-toys': {
          fieldId: 'using-sex-toys',
          fieldLabel: 'Using sex toys',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'condom-use': {
          fieldId: 'condom-use',
          fieldLabel: 'Condom/barrier use',
          fieldType: 'selectField', 
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'regular-sti-testing': {
          fieldId: 'regular-sti-testing',
          fieldLabel: 'Regular STI testing',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
       'kinky-stuff': {
          fieldId: 'kinky-stuff',
          fieldLabel:  'Kinky stuff',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'threesomes-group-sex': {
          fieldId: 'threesomes-group-sex',
          fieldLabel: 'Threesomes or group sex',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
      }
    },
    'EmotionalIntimacy': {
      categoryId: 'EmotionalIntimacy',
      categoryLabel: 'Emotional Intimacy',
      nextCategoryId: 'Communication',
      previousCategoryId: 'PhysicalIntimacy',
      fields: {
        'expressing-happiness': {
          fieldId: 'expressing-happiness',
          fieldLabel: 'Expressing happiness and joy',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'offering-support-in-hard-times': {
          fieldId: 'offering-support-in-hard-times',
          fieldLabel: 'Offering support in hard times',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'sharing-vulnerable-feelings': {
          fieldId: 'sharing-vulnerable-feelings',
          fieldLabel: 'Sharing vulnerable feelings',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'saying-i-love-you': {
          fieldId: 'saying-i-love-you',
          fieldLabel: 'Saying "I love you"',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'sharing-stories-about-past': {
          fieldId: 'sharing-stories-about-past',
          fieldLabel: 'Sharing stories about past',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'sharing-hopes-for-future': {
          fieldId: 'sharing-hopes-for-future',
          fieldLabel: 'Sharing hopes for future',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'knowing-personal-preferences': {
          fieldId: 'knowing-personal-preferences',
          fieldLabel: 'Knowing personal likes/dislikes (eg favorite food)',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'using-pet-names': {
          fieldId: 'using-pet-names',
          fieldLabel: 'Using pet names',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'sharing-mental-health-challenges': {
          fieldId: 'sharing-mental-health-challenges',
          fieldLabel: 'Sharing about mental health challenges',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'Supporting mental health work': {
          fieldId: 'supporting-mental-health-work',
          fieldLabel:  'Supporting mental health work',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
      },
    },
    'Communication': {
      categoryId: 'Communication',
      categoryLabel: 'Communication',
      nextCategoryId: 'FinancialManagement',
      previousCategoryId: 'EmotionalIntimacy',
      fields: {
        'daily-check-ins': {
          fieldId: 'daily-check-ins',
          fieldLabel: 'Daily or frequent check ins',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'texting': {
          fieldId: 'texting',
          fieldLabel: 'Texting',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'phone-video-calls': {
          fieldId: 'phone-video-calls',
          fieldLabel: 'Phone / video calls',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'discussing-work-and-hobbies': {
          fieldId: 'discussing-work-and-hobbies',
          fieldLabel: 'Discussing work and hobbies',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'discussing-family': {
          fieldId: 'discussing-family',
          fieldLabel: 'Discussing family',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'discussing-friends': {
          fieldId: 'discussing-friends',
          fieldLabel: 'Discussing friends',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'discussing-partners': {
          fieldId: 'discussing-partners',
          fieldLabel: 'Discussing partners',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'discussing-politics': {
          fieldId: 'discussing-politics',
          fieldLabel: 'Discussing politics and current events',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'ability-to-express-disagreement': {
          fieldId: 'ability-to-express-disagreement',
          fieldLabel: 'Ability to express disagreement and hurt feelings',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'ability-to-address-conflict': {
          fieldId: 'ability-to-address-conflict',
          fieldLabel:  'Ability to address and resolve conflict',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'radical-honesty': {
          fieldId: 'radical-honesty',
          fieldLabel: 'Radical honesty',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        }
      },
    },
    'FinancialManagement': {
      categoryId: 'FinancialManagement',
      categoryLabel: 'Financial Management',
      nextCategoryId: 'SocialIntegration',
      previousCategoryId: 'Communication',
      fields: {
        'shared-bank-account': {
          fieldId: 'shared-bank-account',
          fieldLabel: 'Shared bank account(s)',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'mutual-contributions-to-vacation': {
          fieldId: 'mutual-contributions-to-vacation',
          fieldLabel:  'Mutual contributions to vacation/activity fund',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'financial-support': {
          fieldId: 'financial-support',
          fieldLabel: 'Financial support',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'large-gifts': {
          fieldId: 'large-gifts',
          fieldLabel: 'Large gifts',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'complete-financial-integration': {
          fieldId: 'complete-financial-integration',
          fieldLabel: 'Complete financial integration',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
      },
    },
    'SocialIntegration': {
      categoryId: 'SocialIntegration',
      categoryLabel: 'Social Integration',
      previousCategoryId: 'FinancialManagement',
      fields: {
        'meeting-metamors': {
          fieldId: 'meeting-metamors',
          fieldLabel:  'Meeting metamors (partners other partners)',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'meeting-children': {
          fieldId: 'meeting-children',
          fieldLabel: 'Meeting children',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'meeting-parents': {
          fieldId: 'meeting-parents',
          fieldLabel: 'Meeting parents/siblings/extended family',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
        'meeting-friends': {
          fieldId: 'meeting-friends',
          fieldLabel: 'Meeting friends',
          fieldType: 'selectField',
          responseOptions: DEFAULT_RESPONSE_OPTIONS,
          selectedResponse: DEFAULT_RESPONSE
        },
      },
    },
  }
}

export const relationshipForms = {
  ids: ['NonEscalatorRelationship'],
  entities: {
    'NonEscalatorRelationship': nonEscalatorMenu
  }
}