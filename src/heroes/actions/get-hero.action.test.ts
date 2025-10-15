import { describe, expect, test } from "vitest";
import { getHeroAction } from "./get-hero.action";

const BASE_URL = import.meta.env.VITE_API_URL;

describe('getHeroAction', () => {

  test('Should fetch hero data and return with complete image url', async () => {
    
    const result = await getHeroAction('clark-kent');

    expect(result).toStrictEqual({
      id: '1',
      name: 'Clark Kent',
      slug: 'clark-kent',
      alias: 'Superman',
      powers: [
        'Súper fuerza',
        'Vuelo',
        'Visión de calor',
        'Visión de rayos X',
        'Invulnerabilidad',
        'Súper velocidad'
      ],
      description: 'El Último Hijo de Krypton, protector de la Tierra y símbolo de esperanza para toda la humanidad.',
      strength: 10,
      intelligence: 8,
      speed: 9,
      durability: 10,
      team: 'Liga de la Justicia',
      image: 'http://localhost:3001/images/1.jpeg',
      firstAppearance: '1938',
      status: 'Active',
      category: 'Hero',
      universe: 'DC'
    });

    expect(result.image).toBe(BASE_URL+'/images/1.jpeg');

  });

  test('Should throw an error if hero is not found', async () => {

    const idSlug = 'GusF';
    await getHeroAction(idSlug).catch((error) => {
      expect(error).toBeDefined();
      expect(error.message).toBe('Request failed with status code 404');
    });

  });
});