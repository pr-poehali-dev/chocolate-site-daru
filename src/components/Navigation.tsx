import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="bg-beige-50 border-b border-chocolate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" className="text-chocolate-600" size={32} />
            <span className="text-2xl font-bold text-chocolate-800">Дарю</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-chocolate-700 hover:text-chocolate-900 transition-colors"
            >
              Главная
            </a>
            <a
              href="/collections"
              className="text-chocolate-700 hover:text-chocolate-900 transition-colors"
            >
              Коллекции
            </a>
            <a
              href="/about"
              className="text-chocolate-700 hover:text-chocolate-900 transition-colors"
            >
              О компании
            </a>
            <a
              href="/contacts"
              className="text-chocolate-700 hover:text-chocolate-900 transition-colors"
            >
              Контакты
            </a>
          </div>

          <Button className="bg-chocolate-600 hover:bg-chocolate-700 text-white">
            <Icon name="ShoppingCart" size={18} className="mr-2" />
            Корзина
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
