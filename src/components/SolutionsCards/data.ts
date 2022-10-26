import { title } from 'process';

import { ReactComponent as bookDatabase } from '@/assets/svg/icon_book_database.svg';
import { ReactComponent as calendarDatabase } from '@/assets/svg/icon_calendar_data.svg';
import { ReactComponent as clipboardDatabase } from '@/assets/svg/icon_clipboard_data.svg';
import { ReactComponent as database } from '@/assets/svg/icon_database.svg';
import { ReactComponent as whisker } from '@/assets/svg/icon_data_whisker.svg';
import { ReactComponent as dataPie } from '@/assets/svg/icon_data_pie.svg';

export const DataAnalyticsSolutions = [
  {
    id: '1',
    icon: bookDatabase,
    title: 'Data integration',
    description:
      'Extract, transform, load (ETL) or extract, load, transform (ELT); data governance (security, availability, quality) implementation.',
  },
  {
    id: '2',
    icon: calendarDatabase,
    title: 'Data integration',
    description:
      'Data preparation and management; machine learning (ML); designing and implanting artificial intelligence (AI) solutions.',
  },
  {
    id: '3',
    icon: clipboardDatabase,
    title: 'Big data',
    description:
      'Big data infrastructure setup and support.; big data quality and security management; big data capture, analysis and reporting.',
  },
  {
    id: '4',
    icon: database,
    title: 'Data warehousing',
    description:
      'The process of constructing and using a data warehouse. Data warehouse and data marts design and implementation.',
  },
  {
    id: '5',
    icon: whisker,
    title: 'Self-service BI',
    description:
      'Business intelligence; data analytics infrastructure design and implementation; scheduled analytics querying and reporting.',
  },
  {
    id: '6',
    icon: dataPie,
    title: 'Data visualization',
    description:
      'Interactive dashboarding; custom and pre-built visuals; multiple visualization techniques (symbol maps, line charts, pie charts...)',
  },
];
