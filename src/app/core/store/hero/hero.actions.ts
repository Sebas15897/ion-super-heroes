export class LoadHeroesAction {
  static readonly type = '[Hero] Load Heroes';
}

export class LoadHeroDetailAction {
  static readonly type = '[Hero] Load Hero Detail';
  constructor(public heroId: number) {}
}
