import { Component, OnInit } from '@angular/core';
import { Pillar } from '../activities/activities.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  result: Result;

  constructor() {
    this.result = {
      completedDate: '23/12/2021',
      status: {
        medal: 'assets/images/medal.svg',
        title: 'Comunicação Eficaz',
        current: 150,
        max: 150,
      },
      skillFailed: {
        title: 'HOJE SUA COMUNICAÇÃO',
        subtitle: 'AINDA NÃO É EFICAZ',
        icon: 'assets/images/communication-two.svg',
        description:
          'Você faz parte do grupo de pessoas que ainda podem desenvolver sua comunicação como uma ferramenta poderosa na sua vida social. Você ainda tem certa dificuldade de expressar suas ideias e emoções com clareza e objetividade, adaptar sua fala ao contexto social de cada situação, além de compreender e ser facilmente compreendido pelos outros. Vamos aprender como desenvolver essas habilidades?',
      },
      forces: [
        {
          title: 'Objetividade',
          subtitle: 'Se expressar de forma objetiva e firme.',
        },
        {
          title: 'Compreensão',
          subtitle:
            'Compreender e ser compreendido de maneira precisa pelas pessoas.',
        },
      ],
      development: [
        {
          title: 'Clareza',
          subtitle:
            'Passar o conteúdo da sua mensagem de forma clara  e consciente.',
        },
      ],
      pillarsText: [
        {
          title: 'Compreensão',
        },
        {
          title: 'Clareza',
        },
        {
          title: 'Objetividade',
        },
      ],
      pillars: [
        {
          icon: 'assets/images/bright.svg',
          title: 'Clareza',
          active: true,
        },
        {
          icon: 'assets/images/aim-active.svg',
          title: 'Objetividade',
          active: false,
        },
        {
          icon: 'assets/images/heart-active.svg',
          title: 'Compreensão',
          active: false,
        },
      ],
      pillarToday: {
        icon: 'assets/images/communication.svg',
        title: 'Hoje sua comunicação tem',
        subtitle: 'CLAREZA BAIXA',
        description:
          'Você tem dificuldade de expressar suas ideias e opiniões de forma clara e precisa. Isso acontece porque você geralmente não consegue se manter presente nas conversas, prestando atenção tanto nos seus próprios pensamentos, quanto no que acontece ao seu redor. É comum você se sentir no piloto automático, como se não fosse o dono das suas próprias palavras...',
        total: 'assets/images/clarity-value.svg',
      },
    };
  }

  ngOnInit(): void {}
}

//
// Utils
//

interface Result {
  completedDate: string;
  status: Status;
  skillFailed: SkillFailed;
  forces: Force[];
  development: Development[];
  pillarsText: PillarsText[];
  pillars: Pillar[];
  pillarToday: PillarToday;
}

interface Status {
  medal: string;
  title: string;
  current: number;
  max: number;
}

interface SkillFailed {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

interface Force {
  title: string;
  subtitle: string;
}

interface Development {
  title: string;
  subtitle: string;
}

interface PillarsText {
  title: string;
}

interface PillarToday {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  total: string;
}
