
import { View, Text, StyleSheet } from 'react-native';

export function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Ласкаво просимо до Little Lemon
      </Text>

      <Text style={styles.paragraph}>
        Ласкаво просимо до Little Lemon — затишного
        середземноморського бістро, де поєднуються
        традиційні рецепти, свіжі продукти та сучасний
        підхід до приготування їжі.
      </Text>

      <Text style={styles.sectionTitle}>
        Свіжі страви та особливі смаки
      </Text>

      <Text style={styles.paragraph}>
        У нашому меню ви знайдете ароматні страви з
        овочів, свіжі салати, пасту, страви з риби та
        м'яса, а також домашні десерти. Особливу увагу
        ми приділяємо лимонам, оливковій олії, зелені
        та сезонним інгредієнтам. Кожна страва
        готується так, щоб зберегти природний смак
        продуктів і подарувати гостям приємні враження.
      </Text>

      <Text style={styles.sectionTitle}>
        Місце для зустрічей
      </Text>

      <Text style={styles.paragraph}>
        Little Lemon — це місце для сімейних обідів,
        дружніх зустрічей і романтичних вечерь.
        Ми прагнемо створити невимушену атмосферу,
        у якій кожен гість може відпочити від щоденних
        справ, поспілкуватися з близькими та насолодитися
        смачною їжею.
      </Text>

      <Text style={styles.sectionTitle}>
        Для кожного гостя
      </Text>

      <Text style={styles.paragraph}>
        Ми радо зустрічаємо студентів, родини з дітьми,
        туристів і всіх, хто любить відкривати нові смаки.
        У меню можна знайти як легкі страви для швидкого
        обіду, так і ситні варіанти для неспішної вечері.
        Наша мета — зробити кожен візит приємним,
        а кожну страву — приводом повернутися знову.
      </Text>

      <Text style={styles.paragraph}>
        Завітайте до Little Lemon, відкрийте для себе
        середземноморську кухню та проведіть час у
        комфортній атмосфері. Ми будемо раді бачити вас!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 28,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#495E57',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#495E57',
    marginTop: 22,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 26,
    color: '#333333',
    marginBottom: 16,
  },
});
