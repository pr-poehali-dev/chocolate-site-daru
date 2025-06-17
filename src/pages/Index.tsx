import Navigation from "@/components/Navigation";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-beige-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-chocolate-100 to-beige-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-chocolate-800 mb-6">
            Премиальный шоколад ручной работы
          </h1>
          <p className="text-xl text-chocolate-600 mb-8 max-w-2xl mx-auto">
            Создаем уникальные шоколадные произведения из лучших какао-бобов по
            семейным рецептам с 1995 года
          </p>
          <Button
            size="lg"
            className="bg-chocolate-600 hover:bg-chocolate-700 text-white px-8 py-3"
          >
            Посмотреть коллекции
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-chocolate-800 mb-12">
            Наши особенности
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon="Hand"
              title="Ручная работа"
              description="Каждая конфета создается вручную нашими мастерами-кондитерами"
            />
            <FeatureCard
              icon="Leaf"
              title="Натуральные ингредиенты"
              description="Используем только органические и натуральные компоненты"
            />
            <FeatureCard
              icon="Crown"
              title="Премиум какао-бобы"
              description="Отборные какао-бобы из лучших плантаций мира"
            />
            <FeatureCard
              icon="Users"
              title="Семейные рецепты"
              description="Традиции и рецепты передаются из поколения в поколение"
            />
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-16 bg-beige-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-chocolate-800 mb-12">
            Наши коллекции
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-chocolate-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-chocolate-200"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-chocolate-800 mb-2">
                  Классическая
                </h3>
                <p className="text-chocolate-600 mb-4">
                  Традиционные вкусы для истинных ценителей
                </p>
                <Button
                  variant="outline"
                  className="border-chocolate-300 text-chocolate-700"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-chocolate-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-chocolate-300"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-chocolate-800 mb-2">
                  Премиум
                </h3>
                <p className="text-chocolate-600 mb-4">
                  Эксклюзивные сорта с уникальными добавками
                </p>
                <Button
                  variant="outline"
                  className="border-chocolate-300 text-chocolate-700"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-chocolate-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-chocolate-400"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-chocolate-800 mb-2">
                  Подарочные наборы
                </h3>
                <p className="text-chocolate-600 mb-4">
                  Красивые наборы для особых случаев
                </p>
                <Button
                  variant="outline"
                  className="border-chocolate-300 text-chocolate-700"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-chocolate-800 mb-6">
                О компании
              </h2>
              <p className="text-chocolate-600 mb-4">
                Семейная компания "Дарю" создает премиальный шоколад с 1995
                года. Мы гордимся традициями качества и используем только лучшие
                ингредиенты.
              </p>
              <p className="text-chocolate-600 mb-6">
                Наша миссия — дарить радость через вкус настоящего шоколада,
                созданного с любовью и мастерством.
              </p>
              <Button className="bg-chocolate-600 hover:bg-chocolate-700 text-white">
                Узнать больше
              </Button>
            </div>
            <div className="bg-chocolate-200 h-80 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-chocolate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon
                name="MapPin"
                size={32}
                className="mx-auto mb-4 text-beige-300"
              />
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-beige-200">
                ул. Шоколадная, 15
                <br />
                Москва, 123456
              </p>
            </div>
            <div className="text-center">
              <Icon
                name="Phone"
                size={32}
                className="mx-auto mb-4 text-beige-300"
              />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-beige-200">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center">
              <Icon
                name="Mail"
                size={32}
                className="mx-auto mb-4 text-beige-300"
              />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-beige-200">info@daryu-chocolate.ru</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
